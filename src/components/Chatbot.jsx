import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageSquareMore, Mic, Send, Sparkles, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { chatSuggestions } from '../data/portfolio'
import { getChatReply } from '../lib/chatLogic'

const initialMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi, I'm Saman's portfolio assistant. Ask me about his projects, skills, experience, or contact details and I'll keep it quick, thoughtful, and helpful.",
}

function TypingText({ text, animate }) {
  const [visibleText, setVisibleText] = useState(animate ? '' : text)

  useEffect(() => {
    if (!animate) {
      setVisibleText(text)
      return undefined
    }

    setVisibleText('')
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setVisibleText(text.slice(0, index))
      if (index >= text.length) {
        window.clearInterval(interval)
      }
    }, 14)

    return () => window.clearInterval(interval)
  }, [text, animate])

  return <span>{visibleText}</span>
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([initialMessage])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [animatedMessageId, setAnimatedMessageId] = useState('')
  const [listening, setListening] = useState(false)
  const bottomRef = useRef(null)

  const quickActions = useMemo(() => chatSuggestions.slice(0, 4), [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, open, typing])

  function appendAssistantMessage(content) {
    const id = `assistant-${Date.now()}`
    setAnimatedMessageId(id)
    setMessages((current) => [...current, { id, role: 'assistant', content }])
  }

  function submitMessage(content) {
    if (!content.trim() || typing) return

    const trimmed = content.trim()
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: 'user', content: trimmed }])
    setInput('')
    setTyping(true)

    const delay = 500 + Math.floor(Math.random() * 400)
    window.setTimeout(() => {
      appendAssistantMessage(getChatReply(trimmed))
      setTyping(false)
    }, delay)
  }

  function handleVoiceInput() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition || null

    if (!SpeechRecognition) {
      appendAssistantMessage('Voice input is not supported here yet, but you can still ask me anything by typing.')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    setListening(true)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      setListening(false)
    }

    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)
    recognition.start()
  }

  return (
    <>
      <motion.button
        id="chat"
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.04, y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full border border-accent/30 bg-slate-950/75 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(7,12,23,0.42),0_0_24px_rgba(105,240,255,0.14)] backdrop-blur-3xl sm:bottom-6 sm:right-6"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-violet/30 text-accent">
          <Bot size={18} />
        </div>
        <div className="text-left">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">AI Guide</p>
          <p className="mt-0.5 text-sm text-white">Ask Saman&apos;s assistant</p>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] flex items-end justify-end bg-[radial-gradient(circle_at_bottom_right,rgba(124,92,255,0.2),transparent_30%),rgba(2,6,23,0.52)] p-3 backdrop-blur-md sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 42, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[82vh] w-full max-w-[430px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.94))] shadow-[0_35px_120px_rgba(2,6,23,0.72)] backdrop-blur-3xl"
            >
              <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(105,240,255,0.2),transparent_65%)]" />
              <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-[0_0_24px_rgba(105,240,255,0.12)]">
                    <MessageSquareMore size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Portfolio Assistant</p>
                    <h3 className="mt-1 font-display text-xl text-white">Talk with Saman&apos;s AI guide</h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 border-b border-white/10 px-5 py-3">
                {quickActions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => submitMessage(suggestion)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.08] hover:text-accent"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-[1.65rem] px-4 py-3 text-sm leading-7 shadow-[0_10px_30px_rgba(2,6,23,0.22)] ${
                        message.role === 'user'
                          ? 'rounded-br-md bg-gradient-to-r from-accent to-violet text-slate-950'
                          : 'rounded-bl-md border border-white/10 bg-white/[0.06] text-slate-100 backdrop-blur-xl'
                      }`}
                    >
                      {message.role === 'assistant' ? (
                        <TypingText text={message.content} animate={animatedMessageId === message.id} />
                      ) : (
                        message.content
                      )}
                    </div>
                  </motion.div>
                ))}

                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    <Sparkles size={14} className="text-accent" />
                    typing...
                  </motion.div>
                )}
                <div ref={bottomRef} />
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  submitMessage(input)
                }}
                className="border-t border-white/10 p-4"
              >
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleVoiceInput}
                    className={`rounded-2xl border px-4 text-slate-200 transition duration-300 ${
                      listening
                        ? 'border-accent/60 bg-accent/10 text-accent'
                        : 'border-white/10 bg-white/5 hover:border-accent/30'
                    }`}
                  >
                    <Mic size={18} />
                  </button>
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask about projects, skills, or experience..."
                    className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-accent/40"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-accent to-violet px-4 text-slate-950 shadow-[0_10px_24px_rgba(105,240,255,0.18)] transition duration-300 hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
