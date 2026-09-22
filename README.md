# Nio

> A local AI chat application built with .NET and Blazor.

![GitHub stars](https://img.shields.io/github/stars/Rashfox/Nio?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/Rashfox/Nio?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/Rashfox/Nio?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/Rashfox/Nio?style=for-the-badge&logo=github) ![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## 📝 Description

Nio is a local AI chat interface implemented as a .NET project. It provides a dedicated environment for running conversational AI capabilities locally, organized around self-hosted chat operations rather than remote cloud chat frontends. The system architecture is built as a Blazor web application, utilizing modern Razor components, dedicated backend services in the Services directory, and static assets hosted in wwwroot. Configuration is handled through standard appsettings.json and development environment configuration files, managed directly through the .NET runtime. Nio is designed for developers and individuals who want a clean, C#-based frontend and service architecture for running local AI chat tools with full control over the runtime environment.

## ✨ Key Features

- **💬 Local AI Chat Services** — Orchestrates chat functionality locally using modular backend service implementations.
- **🌐 Blazor Component Architecture** — Delivers an interactive chat interface built with Razor components and static web assets.
- **⚙️ Standardized Configuration Management** — Loads application profiles and runtime configurations through appsettings.json files.
- **🛠️ Integrated .NET CLI Tooling** — Supports standard development lifecycles with built-in dotnet run and dotnet test support.

## 🎯 Use Cases

- Running a local conversational AI client on your local workstation without external web hosting.
- Customizing and extending Blazor-based chat UI components within a .NET environment.
- Integrating local AI models or backends into structured C# and ASP.NET Core services.

## 🛠️ Tech Stack

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)

## 📋 Prerequisites

Before running this application, you must have **Ollama** installed and running on your local machine to handle the AI chat services.

1. **Install Ollama**: Download it from [ollama.com](https://ollama.com/).
2. **Start Ollama**: Ensure the Ollama background service is running.
3. **Prepare the Model**: This application uses a custom model named `nio` (based on Qwen 7B). Open your terminal and run:

   ```bash
   # Pull the base Qwen 7B model (if needed) and the custom nio model
   ollama pull qwen:7b
   ollama create nio -f Modelfile


## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone [https://github.com/Rashfox/Nio-Chat-AI.git](https://github.com/Rashfox/Nio-Chat-AI.git)

# 2. Navigate to the project directory
cd Nio-Chat-AI

# 3. Ensure Ollama is running with the 'nio' model ready
# (See Prerequisites above)

# 4. Restore dependencies and run the application
dotnet restore
dotnet run

```

## 🚀 Available Scripts

- **run** — `dotnet run`
- **test** — `dotnet test`

## 📁 Project Structure

```
.
├── App_Data
│   └── training-conversations.jsonl
├── Components
│   ├── App.razor
│   ├── Layout
│   │   ├── MainLayout.razor
│   │   ├── MainLayout.razor.css
│   │   ├── ReconnectModal.razor
│   │   ├── ReconnectModal.razor.css
│   │   └── ReconnectModal.razor.js
│   ├── Pages
│   │   ├── Error.razor
│   │   ├── Home.razor
│   │   └── Home.razor.css
│   ├── Routes.razor
│   └── _Imports.razor
├── LICENSE
├── Program.cs
├── Properties
│   └── launchSettings.json
├── Services
│   └── OllamaChatService.cs
├── appsettings.Development.json
├── appsettings.json
├── blazor.csproj
└── wwwroot
    ├── app.css
    ├── chat-storage.js
    └── favicon.png
```

## 🛠️ Development Setup

### .NET
1. Install the [.NET SDK](https://dotnet.microsoft.com/)
2. `dotnet restore && dotnet run`

## 👥 Contributors

Thanks to everyone who has contributed to this project:

<p align="left">
<a href="https://github.com/Rashfox" title="Rashfox"><img src="https://avatars.githubusercontent.com/u/113658888?v=4&s=64" width="64" height="64" alt="Rashfox" style="border-radius:50%" /></a>
</p>

[See the full list of contributors →](https://github.com/Rashfox/Nio/graphs/contributors)

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Rashfox/Nio.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

## 📜 License

This project is licensed under the **MIT** License.

---

