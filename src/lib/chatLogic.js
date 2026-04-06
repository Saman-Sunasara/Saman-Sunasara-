const knowledge = {
  about:
    "Saman Sunasara is a B.Tech CSE (AI) student at Parul University with strong hands-on work in AI/ML and full-stack development. He focuses on building practical systems that connect strong engineering with real-world usefulness.",
  skills:
    "Saman works across Python, JavaScript, React.js, Node.js, TensorFlow, PyTorch, OpenCV, MongoDB, Django, REST APIs, federated learning, and GPU-oriented tools like CUDA and OpenMP.",
  contact:
    "You can reach Saman at samansunasara5@gmail.com or on LinkedIn. He is open to internships, collaborations, and product-focused engineering work.",
  experience:
    "Saman's experience is strongly project-driven: federated learning, emotion tracking with computer vision, stock prediction with LSTMs, and full-stack website builder development with real client delivery experience.",
}

const projectDetails = {
  'federated learning system':
    "The Federated Learning System uses TensorFlow and FedAvg aggregation across distributed clients to train a shared model without centralizing raw data. It reached around 92% accuracy on MNIST and reflects strong understanding of privacy-aware AI systems.",
  'emotion detection':
    "Emotion Detection is a computer vision project built with CNNs and OpenCV for real-time facial emotion recognition. It handles live video input and tracks emotion changes over time, which makes it practical as well as technically interesting.",
  'stock prediction':
    "The Stock Prediction project uses LSTM-based forecasting with features like moving averages, RSI, and MACD. It shows Saman's ability to work with sequential data, feature engineering, and predictive modeling.",
  'website builder saas':
    "The Website Builder project is a multi-client full-stack platform built with React, Node.js, MongoDB, and REST APIs. It highlights reusable architecture, client delivery, and product execution rather than just a demo-level build.",
}

const keywordGroups = {
  projects: ['project', 'projects', 'portfolio', 'work', 'built', 'build'],
  skills: ['skill', 'skills', 'stack', 'technology', 'technologies', 'tech'],
  about: ['about', 'who is', 'who are you', 'intro', 'background'],
  contact: ['contact', 'email', 'reach', 'hire', 'connect', 'linkedin'],
  experience: ['experience', 'worked on', 'strength', 'strengths', 'resume', 'internship'],
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
    `${projectName} reflects Saman's ability to combine strong technical execution with practical product thinking.`
  )
}

export function getChatReply(userInput) {
  const input = userInput.toLowerCase().trim()

  const projectMatch = matchProject(input)
  if (projectMatch) {
    return humanize(
      projectMatch[1],
      "If you want, I can also summarize what that project says about Saman's strengths.",
    )
  }

  if (includesKeyword(input, keywordGroups.projects)) {
    return humanize(
      "Saman's main work includes a federated learning system, an emotion tracking system, an LSTM-based stock prediction project, and a full-stack website builder platform.",
      "Together they show strength across AI systems, computer vision, forecasting, and full-stack product development.",
    )
  }

  if (includesKeyword(input, keywordGroups.skills)) {
    return humanize(
      knowledge.skills,
      "A big strength here is that the skills are backed by working projects, not just a tools list.",
    )
  }

  if (includesKeyword(input, keywordGroups.about)) {
    return humanize(
      knowledge.about,
      "He is especially focused on building systems that are technically solid and genuinely useful.",
    )
  }

  if (includesKeyword(input, keywordGroups.contact)) {
    return humanize(
      knowledge.contact,
      "You can also download the resume directly from the portfolio.",
    )
  }

  if (includesKeyword(input, keywordGroups.experience)) {
    return humanize(
      knowledge.experience,
      "A concise summary would be: project-driven AI/ML and full-stack builder with strong self-learning momentum.",
    )
  }

  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return "Hi, happy to help. You can ask about Saman's projects, skills, background, experience, or resume."
  }

  return "I can help with projects, skills, background, experience, or resume details. Try asking something like 'Tell me about your projects' or 'What kind of work does Saman specialize in?'"
}
