# AI Code Logic Explainer

**AI Code Logic Explainer** is an intelligent developer tool designed to analyze code snippets and provide clear, human-readable explanations of the underlying logic. Leveraging the power of Google's AI models and a robust code editing interface, this project aims to help developers understand complex algorithms and codebases faster.

## 🚀 Features

- **Interactive Code Editor**: Built with [Monaco Editor](https://github.com/suren-atoyan/monaco-react) (the engine behind VS Code) for a familiar coding experience with syntax highlighting.
- **AI-Powered Analysis**: Utilizes advanced AI models to parse and explain code logic in natural language.
- **Rich Text Output**: Explanations are rendered in formatted Markdown using [React Markdown](https://github.com/remarkjs/react-markdown).
- **Secure Integration**: Uses [Google Auth Library](https://github.com/googleapis/google-auth-library-nodejs) for secure authentication and API interaction.

## 🛠️ Tech Stack

- **Frontend**: React
- **Code Editor**: @monaco-editor/react
- **Markdown Rendering**: react-markdown, micromark
- **Authentication/AI**: google-auth-library
- **Utilities**: picomatch, is-glob

<br>

**Environment Configuration**
    Create a `.env` file in the root directory and add your necessary API keys (e.g., Google Cloud Project ID, API Keys).

    ```env
    # Example configuration
    VITE_GEMINI_API_KEY="your_api_key_here"
    ```