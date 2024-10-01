# ToDo List

ToDo List is a robust and user-friendly task management application built with React Native. It allows users to efficiently organize, manage, and track their tasks across multiple columns, providing a seamless experience on both Android and iOS devices. Whether you're managing personal to-dos or collaborating on team projects, ToDo List offers the tools you need to stay organized and productive.

## Features
- **User-Friendly Interface:** Clean and intuitive design ensures an optimal user experience.
- **Multi-Column Task Organization:** Organize tasks into predefined columns such as Backlog, To Do, In Progress, Review, QA, and Done.
- **Add Tasks:** Easily create new tasks with titles and optional descriptions.
- **Edit Tasks:** Modify existing tasks to update details as needed.
- **Delete Tasks:** Remove tasks that are no longer required.
- **Drag and Drop:** Reorder tasks within a column or move them between different columns effortlessly.
- **Persistent Storage:** All tasks are saved locally using AsyncStorage, ensuring your data is preserved between sessions.
- **Responsive Design:** Optimized for both Android and iOS platforms.
- **Swipe Navigation:** Navigate between different task columns using a swipe gesture.
- **Modals for Task Actions:** Interact with tasks through modals for editing and deletion.

## Screenshots
Include screenshots of your app here to showcase the UI and features.



https://github.com/user-attachments/assets/46918cd3-6a4c-4e28-86f1-14811c8dc130



# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Adding a Task
1. Navigate to the desired column.
2. Tap on the **"Add Task"** button.
3. Enter the task title (mandatory) and description (optional).
4. Save the task to see it appear in the selected column.

## Editing a Task
1. Tap on an existing task to open the edit modal.
2. Modify the task details as needed.
3. Save the changes to update the task.

## Deleting a Task
1. Long-press on a task to enable drag mode or tap to open the task modal.
2. In the modal, choose the delete option to remove the task.

## Reordering Tasks
1. Long-press and drag a task to reorder it within the same column or move it to a different column.
2. Release the task to place it in the desired position.

## Persistent Storage
All tasks are saved locally using **AsyncStorage**, ensuring that your tasks persist between app sessions.

## Technologies Used
- **React Native:** Framework for building native apps using React.
- **TypeScript:** Superset of JavaScript for type safety and enhanced developer experience.
- **React Navigation:** Handles in-app navigation and routing.
- **AsyncStorage:** Provides persistent, asynchronous, key-value storage.
- **react-native-swiper:** Enables swipe gestures for navigating between columns.
- **react-native-draggable-flatlist:** Implements drag-and-drop functionality for task reordering.
- **React Native Paper:** UI component library for consistent styling.


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
