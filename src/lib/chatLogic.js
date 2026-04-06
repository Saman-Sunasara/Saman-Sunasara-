const knowledge = {
  about:
    "Saman Sunasara is an AI/ML Engineer and Full-Stack Developer who enjoys turning complex systems into experiences that feel clear, polished, and useful. His work blends machine learning, modern frontend craft, and product thinking.",
  skills:
    "Saman works across TensorFlow, deep learning, CNNs, LSTMs, React, Tailwind CSS, Node.js, Three.js, Framer Motion, OpenCV, API design, and full-stack product development.",
  contact:
    "You can reach Saman at samansunasara5@gmail.com. He is open to collaborations around AI products, modern web experiences, and full-stack development.",
  experience:
    "Saman's portfolio reflects strong hands-on experience across federated learning, computer vision, time-series forecasting, and full-stack SaaS product building. The common thread is shipping technically strong work with a premium user experience.",
}

const projectDetails = {
  'federated learning system':
    "The Federated Learning System is one of Saman's strongest AI projects. It focuses on privacy-first distributed training, uses TensorFlow, and reached 92% accuracy. It shows he can work on advanced ML systems that balance performance with practical deployment concerns.",
  'emotion detection':
    "Emotion Detection combines CNN-based modeling with OpenCV for real-time facial expression analysis. It highlights Saman's strengths in computer vision, responsive inference flows, and building applied AI that feels interactive.",
  'stock prediction':
    "The Stock Prediction project uses LSTM models for time-series forecasting. It reflects Saman's ability to work with sequential data, feature engineering, and predictive modeling in a way that can support real analytical products.",
  'website builder saas':
    "The Website Builder SaaS shows Saman's full-stack product side. Built with React and Node.js, it focuses on reusable systems, scalable APIs, and polished UX, which makes it a strong example of engineering plus product craft.",
}

const keywordGroups = {
  projects: ['project', 'projects', 'portfolio', 'work', 'built', 'build'],
  skills: ['skill', 'skills', 'stack', 'technology', 'technologies', 'tech'],
  about: ['about', 'who is', 'who are you', 'intro', 'background'],
  contact: ['contact', 'email', 'reach', 'hire', 'connect'],
  experience: ['experience', 'worked on', 'strength', 'strengths', 'resume'],
}

function includesKeyword(input, keywords) {
  return keywords.some((keyword) => input.includes(keyword))
}

function matchProject(input) {
  return Object.entries(projectDetails).find(([name]) => input.includes(name))
}

function humanize(text, followUp) {
  return `${text}${followUp ? ` ${followUp}` : ''}`
}

export function getProjectExplanation(projectName) {
  const key = projectName.toLowerCase()
  return (
    projectDetails[key] ||
    `${projectName} reflects Saman's ability to combine strong technical execution with polished product thinking.`
  )
}

export function getChatReply(userInput) {
  const input = userInput.toLowerCase().trim()

  const projectMatch = matchProject(input)
  if (projectMatch) {
    return humanize(
      projectMatch[1],
      "If you'd like, I can also compare it with another project from the portfolio.",
    )
  }

  if (includesKeyword(input, keywordGroups.projects)) {
    return humanize(
      "Saman's standout projects include a Federated Learning System with 92% accuracy, a real-time Emotion Detection system using CNNs and OpenCV, an LSTM-based Stock Prediction workflow, and a Website Builder SaaS built with React and Node.js.",
      "Each one shows a different side of his work: AI systems, computer vision, forecasting, and product engineering.",
    )
  }

  if (includesKeyword(input, keywordGroups.skills)) {
    return humanize(
      knowledge.skills,
      "The nice part is that he doesn't just know the tools, he uses them to build things that feel thoughtful and production-ready.",
    )
  }

  if (includesKeyword(input, keywordGroups.about)) {
    return humanize(
      knowledge.about,
      "He is especially strong where machine learning and premium frontend execution meet.",
    )
  }

  if (includesKeyword(input, keywordGroups.contact)) {
    return humanize(
      knowledge.contact,
      "If you want, I can also suggest what kind of collaboration message would fit his profile best.",
    )
  }

  if (includesKeyword(input, keywordGroups.experience)) {
    return humanize(
      knowledge.experience,
      "A good short summary is: strong AI engineering instincts, modern frontend taste, and product-focused execution.",
    )
  }

  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return "Hi, happy to help. You can ask me about Saman's projects, skills, background, experience, or contact details."
  }

  return "I can help you with projects, skills, background, or experience. Try asking something like 'Tell me about your projects' or 'What kind of work does Saman specialize in?'"
}
