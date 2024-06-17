# Next.js Project Starter Template

#### This template is designed to help you quickly set up a new Next.js project with standardized formatting, theme toggling, and a basic layout configuration. It includes configurations for ESLint, Prettier, Tailwind CSS, and a theme toggle component.

## How to use

At the top of the page, you will find:

<img width="160" alt="Captura de Tela 2024-06-17 às 14 30 15" src="https://github.com/lucasandradegs/NextJS-Template/assets/115107945/13d73f3e-f34b-4352-958f-183c61653508">

And then:

<img width="180" alt="Captura de Tela 2024-06-17 às 14 30 35" src="https://github.com/lucasandradegs/NextJS-Template/assets/115107945/d915a0ac-3132-4f34-8f82-e2901dfe55cf">

Now you're good to go!

## Features

- **Pre-configured ESLint and Prettier**: Ensures consistent code formatting and style.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Theme Toggle**: Built-in dark/light mode toggle.
- **Metadata Configuration**: Easily customizable metadata for SEO.

# Recommended VSCode Settings
#### I strongly recommend using these configurations in your User Settings Preferences (JSON) if you are using VSCode:

Open the command palette (Ctrl+Shift+P or Cmd+Shift+P on macOS).
Type "Preferences: Open Settings (JSON)" and select it.
Add the following configurations:
````json
{
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
````
This will automatically fix ESLint errors when you save the file.

