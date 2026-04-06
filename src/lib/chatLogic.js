const knowledge = {
  about:
    "Saman is an AI/ML engineer and full-stack developer focused on building systems that solve real problems, not just impressive demos. His work combines practical AI, modern web engineering, and product-minded execution.",
  skills:
    "He works across Python, React, Node.js, TensorFlow, PyTorch, OpenCV, MongoDB, Django, REST APIs, and federated learning, with a strong project-driven workflow.",
  contact:
    "You can reach Saman at samansunasara5@gmail.com, connect on LinkedIn, or download the resume directly from the portfolio.",
  experience:
    "His experience is strongest in federated learning, computer vision, forecasting, and full-stack product development. The pattern is consistent: technically solid builds designed for practical use.",
  hire:
    "I focus on building real-world AI systems, not just theory. I've built projects like federated learning and real-time emotion detection, and I adapt quickly to new technologies.",
}

const projectDetails = {
  'federated learning system':
    'The Federated Learning System is built around privacy-aware distributed training with TensorFlow and FedAvg. It reached around 92% accuracy and shows strong understanding of secure collaborative AI.',
  'emotion detection':
    'Emotion Detection uses CNN-based inference with OpenCV for real-time emotion recognition. It is a strong example of applied computer vision with practical interaction value.',
  'stock prediction':
    'The Stock Prediction project uses LSTMs with engineered time-series indicators like RSI and MACD. It reflects solid work in forecasting and data-driven decision support.',
  'website builder saas':
    'The Website Builder is a full-stack SaaS-style platform built with React, Node.js, MongoDB, and REST APIs. It highlights product execution and scalable application thinking.',
}

const keywordGroups = {
  projects: ['project', 'projects', 'portfolio', 'work', 'built', 'build'],
  skills: ['skill', 'skills', 'stack', 'technology', 'technologies', 'tech'],
  about: ['about', 'who is', 'who are you', 'intro', 'background'],
  contact: ['contact', 'email', 'reach', 'hire', 'connect', 'linkedin'],
  experience: ['experience', 'worked on', 'strength', 'strengths', 'resume', 'internship'],
  hire: ['why hire', 'hire you', 'why should', 'why choose', 'strength as a candidate'],
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
  return projectDetails[key] || `${projectName} reflects Saman's ability to combine strong engineering with practical outcomes.`
}

export function getChatReply(userInput) {
  const input = userInput.toLowerCase().trim()

  const projectMatch = matchProject(input)
  if (projectMatch) {
    return humanize(projectMatch[1], 'If you want, I can also connect it to the skills behind it.')
  }

  if (includesKeyword(input, keywordGroups.hire)) {
    return knowledge.hire
  }

  if (includesKeyword(input, keywordGroups.projects)) {
    return humanize(
      "Saman's key projects include federated learning, emotion detection, stock prediction, and a full-stack website builder.",
      'Together they show strength across AI systems, computer vision, forecasting, and scalable applications.',
    )
  }

  if (includesKeyword(input, keywordGroups.skills)) {
    return humanize(knowledge.skills, 'The important part is that these tools are backed by real builds, not just familiarity.')
  }

  if (includesKeyword(input, keywordGroups.about)) {
    return humanize(knowledge.about, 'He tends to work best where engineering quality and practical usefulness both matter.')
  }

  if (includesKeyword(input, keywordGroups.contact)) {
    return humanize(knowledge.contact, 'If you want a quick summary for outreach, I can help with that too.')
  }

  if (includesKeyword(input, keywordGroups.experience)) {
    return humanize(knowledge.experience, 'A short summary is: project-driven, adaptable, and focused on impactful technical work.')
  }

  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return 'Hi. Ask me about projects, skills, why hire Saman, or how to get in touch.'
  }

  return "I can help with projects, skills, experience, contact, or why Saman is a strong hire. Try asking something like 'Why hire you?'"
}
