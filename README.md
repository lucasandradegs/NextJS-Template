# Next.js Project Starter Template

#### This template is designed to help you quickly set up a new Next.js project with standardized formatting, theme toggling, and a basic layout configuration. It includes configurations for ESLint, Prettier, Tailwind CSS, and a theme toggle component.

Please, remember to rename the project on package.json and package-lock.json!

## Features

- **Pre-configured ESLint and Prettier**: Ensures consistent code formatting and style.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Theme Toggle**: Built-in dark/light mode toggle.
- **Metadata Configuration**: Easily customizable metadata for SEO.

## Installation

- You just need to clone this repo and then npm install 😁

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

