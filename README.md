# qp-react-assessment (design documentation - dev only)

React assessment repo for Question Pro - machine coding round

## Requirements:

1. Allow users to mark tasks as completed or incomplete by toggling checkboxes.
2. Ensure efficient performance and scalability to handle a large number of tasks (up to 10,000 items) without significant lag or slowdown.
3. Utilize TypeScript for type-checking and enhanced code quality.
4. Design and implement test cases to ensure the reliability and robustness of the application.

## Dev Flow (rough)

1. Initial Setup ✅

   1. Project started | 14 May 2024 ✅
   2. initial level planning for data layer & ui layer done | lld done ✅
   3. boilerplate setup done via vite - react + ts ✅
   4. tailwind css installation done ✅
   5. added dependencies ✅
      - redux toolkit + react-redux
      - react-icons
      - uuid
   6. setting up data layer ✅
      - set up types of task and taskList - /Types/index.ts
      - set up taskSlice for managing tasks - /Store/slices/tasksSlice.ts
      - set up redux store - /Store/store.ts
      - set up TS enabled hooks in replacement of useDispatch and useSelector - /Store/hooks.ts
      - providing store to the app
   7. dark/light theme functionality via context done ✅

2. Functionality : CRUD done ✅
