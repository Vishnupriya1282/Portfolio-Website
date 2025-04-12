// backend/resumeData.js

// const { default: Techstack } = require("../src/components/About/Techstack");

const resumeData = {
    name: "Vishnupriya Tudu",
    education: "B.Tech in Mathematics and Computing, IIT ROpar",
    skills: ["JavaScript", "React", "Node.js", "Python", "C", "C++", "Java", "MongoDB", "Express.js"],
    experience: "No proffesional experience but highly experienced in coding.",
    projects: [
        {
          title: "Implementation of Fibonacci Heap",
          tech: ["C"],
          description: "Demonstrated a Fibonacci heap for efficient priority queue operations: insertion, merging, extracting minimum keys, decreasing keys, and supporting Dijkstra’s algorithm for optimal shortest path calculations in graphs. Implemented key operations: insertion, extraction of minimum elements, key-value reduction, specific element deletion, and heap clearing."
        },
        {
          title: "Customer Cluster Analysis",
          tech: ["Python", "pandas", "numpy", "scikit-learn", "matplotlib", "seaborn"],
          description: "This project aims to segment mall customers into different groups based on their annual income and spending score."
        },
        {
          title: "Expenza",
          tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
          description: "Developed a robust full stack Expense Management website powered by the MERN stack, offering an intuitive platform for users to seamlessly add new transactions, modify and delete their existing transactions."
        },
        {
          title: "Diabetic Health Assessment",
          tech: ["C++"],
          description: "The Diabetes Diagnosis Software is a console-based application designed to collect and analyze user-provided symptoms related to diabetes. Users input personal information and answer a series of symptom-related questions, processed through diagnostic algorithms to assess diabetic conditions. Results are displayed based on symptom analysis, with interactive prompts for further diagnosis steps or exit options based on assessed conditions."
        },
        {
          title: "Tic-Tac-Toe",
          tech: ["Python"],
          description: "Interactive Tic-Tac-Toe game built using Python's Tkinter library. The game allows two players to play against each other on a 3x3 grid, taking turns to mark the cells with 'X' and 'O'. The game includes logic to manage turns, check for win conditions, and display results."
        },
        {
          title: "Minesweeper",
          tech: ["Java"],
          description: "This project is a classic Minesweeper game developed using Java. The game features a grid of hidden cells, some of which contain mines. The player’s goal is to reveal all the cells without detonating any mines by using logic and number clues."
        },
        {
          title: "TransLingo Translator",
          tech: ["Python"],
          description: "TransLingo is a Python-based language translator application that helps users translate text between multiple languages in real time. It uses translation APIs to provide fast and accurate translations with a simple and user-friendly interface."
        }
      ]
  };
  
  const systemPrompt = `You are a chatbot that answers based on this resume data:
  Name: ${resumeData.name}
  Education: ${resumeData.education}
  Skills: ${resumeData.skills.join(', ')}
  Experience: ${resumeData.experience}
  Projects: ${resumeData.projects.map(p => `${p.title} - ${p.description}`).join('; ')}`;
  
  module.exports = { resumeData, systemPrompt };
  