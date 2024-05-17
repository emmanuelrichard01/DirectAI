<<<<<<< HEAD
# Direct AI (Prompt Sharing Application)

Welcome to the Direct AI repository! This application allows users to create, edit, search, and share prompts. Built with Next.js and MongoDB, the application leverages modern web technologies to provide a seamless user experience. Below, you'll find comprehensive information on the features, technologies used, and instructions for setting up the project locally.

## Features

1. **User Authentication**: Secure login and registration functionality using NextAuth.
2. **Prompt Creation**: Users can create new prompts with associated tags.
3. **Prompt Editing**: Users can edit their existing prompts.
4. **Prompt Deletion**: Users can delete their prompts.
5. **Search Functionality**: Search prompts by tags, username, or keywords within the prompts.
6. **Profile Pages**: Each user has a personalized profile page displaying their prompts.
7. **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **MongoDB**: NoSQL database for storing user and prompt data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **NextAuth**: Authentication library for Next.js applications.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive user interfaces.

## Installation and Setup

Follow these steps to install and run the project on your local machine:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB**: Ensure you have MongoDB installed and running. You can download it from [MongoDB official website](https://www.mongodb.com/).

### Step-by-Step Guide

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/prompt-sharing-app.git
    cd prompt-sharing-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```plaintext
    NEXTAUTH_URL=http://localhost:3000
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Best Practices

- **Code Quality**: Use ESLint and Prettier for maintaining code quality and consistency.
- **Commit Messages**: Follow conventional commit message guidelines for better project management.
- **Environment Variables**: Keep sensitive information secure and avoid hardcoding credentials.
- **Error Handling**: Implement comprehensive error handling in your APIs and client-side code.
- **Responsive Design**: Ensure that your changes maintain the application's responsiveness across different devices.

## Directory Structure

Here's an overview of the project directory structure:

```plaintext
prompt-sharing-app/
├── components/
│   ├── Form.jsx
│   ├── Profile.jsx
│   ├── PromptCard.jsx
│   ├── PromptCardList.jsx
│   ├── Feed.jsx
│   ├── useFetchPosts.jsx
│   ├── useSearch.jsx
│   └── debounce.jsx
├── models/
│   └── prompt.js
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   ├── prompt/
│   │   └── users/
│   ├── profile/
│   │   └── [id].jsx
│   ├── _app.js
│   ├── index.js
│   └── update-prompt.jsx
├── styles/
│   └── globals.css
├── utils/
│   └── database.js
├── .env.local
├── .eslintrc.js
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](http://) for details on the process for submitting pull requests to us.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for using and contributing to the Prompt Sharing Application! If you have any questions or need further assistance, please feel free to open an issue or contact the repository maintainers.

Happy coding! 🎉
=======
# DirectAI
AI Prompt Project
>>>>>>> df2d1a759fdddd2cbddb466ce3f7e0c1c4e4a00c
