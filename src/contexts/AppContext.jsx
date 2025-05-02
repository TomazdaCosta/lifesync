import React from 'react'

export const AppContext = React.createContext()

export function AppContextProvider({ children }) {
  // User
  const [userName, setUserName] = React.useState()
  const [modalUser, setModalUser] = React.useState(true)
  const [changeUserName, setChangeUserName] = React.useState(false)

  // Finances
  const [movement, setMovement] = React.useState()
  const [movementValue, setMovementValue] = React.useState()
  const [nature, setNature] = React.useState()
  const [financesList, setFinancesList] = React.useState([])
  const [totalFinances, setTotalFinances] = React.useState(0)

  // Goals
  const [newGoal, setNewGoal] = React.useState()
  const [timeWindow, setTimeWindow] = React.useState()
  const [goalsList, setGoalsList] = React.useState([])
  const [newGoalsList, setNewGoalsList] = React.useState([])
  const [goalsAchievedList, setGoalsAchieved] = React.useState([])
  const [controlGoalsSelected, setControlGoalsSelected] = React.useState({
    all: true,
    month: false,
    bimonthly: false,
    quarter: false,
    semestre: false,
    year: false,
    achieved: false
  })

  // Notes
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()
  const [notesList, setNotesList] = React.useState([])

  // Tasks
  const [task, setTask] = React.useState()
  const [tasksList, setTasksList] = React.useState([])
  const [accomplishedTaskList, setAccomplishedTaskList] = React.useState([])
  const [renderTaskstList, setRenderTasksList] = React.useState([])
  const [controlTasksSelected, setControlTasksSelected] = React.useState({
    all: true,
    achieved: false
  })

  // MenuMobile
  const [activeMenu, setActiveMenu] = React.useState(false)

  // User
  const addUserName = (value) => {
    setUserName(value)
  }

  const changeModalUser = () => {
    setModalUser(false)
  }

  const funcChangeUserName = () => {
    setChangeUserName((current) => !current)
  }

  // Finances
  const SetMovement = (value) => {
    setMovement(value)
  }

  const SetMovementValue = (value) => {
    setMovementValue(value)
  }

  const SetNature = (value) => {
    setNature(value)
  }

  const addFinancesList = (e) => {
    e.preventDefault()

    const launch = {
      id: Math.floor(Math.random() * 1000000),
      movement: movement,
      movementValue: movementValue,
      nature: nature
    }

    if(launch.movement && launch.movementValue && launch.nature) {
      setFinancesList((current) => [...current, launch])
    }

    if(launch.nature === 'entry') {
      setTotalFinances((current) => current + +launch.movementValue)
    }
    
    if(launch.nature === 'outflow') {
      setTotalFinances((current) => current - +launch.movementValue)
    }

    setMovement('')
    setMovementValue('')
    setNature('disabled')
  }

  const removeFinances = (id) => {
    const newFinancesList = financesList.filter(launch => launch.id !== +id)
    const financesRemoved = financesList.find(launch => launch.id === id)
    setFinancesList(newFinancesList)

    if(financesRemoved.nature === 'entry') {
      setTotalFinances((current) => current - +financesRemoved.movementValue)
    }

    if(financesRemoved.nature === 'outflow') {
      setTotalFinances((current) => current + +financesRemoved.movementValue)
    }
  }

  // Goals
  const addNewGoal = (value) => {
    setNewGoal(value)
  }

  const addTimeWindow = (value) => {
    setTimeWindow(value)
  }

  const addGoalsList = (e) => {
    e.preventDefault()

    const goal = {
      id: Math.floor(Math.random() * 1000000),
      newGoal: newGoal,
      timeWindow: timeWindow
    }

    if(goal.newGoal && goal.timeWindow) {
      setGoalsList((current) => [...current, goal])
      setNewGoalsList((current) => [...current, goal])
    }

    setNewGoal('')
    setTimeWindow('disabled')
  }

  const changeGoalsList = (selectedTimeWindow) => {
    const newList = goalsList.filter(goal => goal.timeWindow === selectedTimeWindow)

    if(selectedTimeWindow === 'all') {
      setNewGoalsList(goalsList)
    } else if(selectedTimeWindow === 'achieved') {
      setNewGoalsList(goalsAchievedList)
    } else {
      setNewGoalsList(newList)
    }
  }

  const goalsAchieved = (id) => {
    const goalAchieved = goalsList.find((goal) => goal.id === id)
    goalAchieved.timeWindow = 'achieved'
    const newGoalsListAchieved = newGoalsList.filter((goal) => goal.id !== id)

    setNewGoalsList(newGoalsListAchieved)
    setGoalsList(newGoalsListAchieved)
    setGoalsAchieved((current) => [...current, goalAchieved])
  }

  const removeGoal = (id) => {
    const removedList = goalsList.filter((goal) => goal.id !== id)
    setGoalsList(removedList)
    setNewGoalsList(removedList)
  }

  const changeControlGoalsSelected = (selected) => {
    if(selected === 'all') {
      setControlGoalsSelected({
        all: true,
        month: false,
        bimonthly: false,
        quarter: false,
        semestre: false,
        year: false,
        achieved: false
      })
    } else if(selected === 'month') {
      setControlGoalsSelected({
        all: false,
        month: true,
        bimonthly: false,
        quarter: false,
        semestre: false,
        year: false,
        achieved: false
      })
    } else if(selected === 'bimonthly') {
      setControlGoalsSelected({
        all: false,
        month: false,
        bimonthly: true,
        quarter: false,
        semestre: false,
        year: false,
        achieved: false
      })
    } else if(selected === 'quarter') {
      setControlGoalsSelected({
        all: false,
        month: false,
        bimonthly: false,
        quarter: true,
        semestre: false,
        year: false,
        achieved: false
      })
    } else if(selected === 'semestre') {
      setControlGoalsSelected({
        all: false,
        month: false,
        bimonthly: false,
        quarter: false,
        semestre: true,
        year: false,
        achieved: false
      })
    } else if(selected === 'year') {
      setControlGoalsSelected({
        all: false,
        month: false,
        bimonthly: false,
        quarter: false,
        semestre: false,
        year: true,
        achieved: false
      })
    } else if(selected === 'achieved') {
      setControlGoalsSelected({
        all: false,
        month: false,
        bimonthly: false,
        quarter: false,
        semestre: false,
        year: false,
        achieved: true
      })
    }
  }

  // Notes
  const addTitle = (value) => {
    setTitle(value)
  }

  const addContent = (value) => {
    setContent(value)
  }

  const addNote = (e) => {
    e.preventDefault()

    const note = {
      id: Math.floor(Math.random() * 1000000),
      title: title,
      content: content
    }

    if(note.title && note.content) {
      setNotesList((current) => [...current, note])
    }

    setTitle('')
    setContent('')
  }

  const removeNote = (id) => {
    const newNoteList = notesList.filter((note) => note.id !== id)

    setNotesList(newNoteList)
  }

  // Tasks
  const addTaskTitle = (value) => {
    setTask(value)
  }

  const addTask = (e) => {
    e.preventDefault()

    const newTask = {
      id: Math.floor(Math.random() * 1000000),
      taskTitle: task,
      completed: false
    }

    if(newTask.taskTitle) {
      setTasksList((current) => [...current, newTask])
      setRenderTasksList((current) => [...current, newTask])
    }

    setTask('')
  }

  const removeTask = (id) => {
    const newTaskRemoved = tasksList.filter((task) => task.id !== id)
    
    setTasksList(newTaskRemoved)
    setRenderTasksList(newTaskRemoved)
  }

  const performTask = (id) => {
    const accomplishedTask = tasksList.find((task) => task.id === id)
    accomplishedTask.completed = true
    const newTaskList = tasksList.filter((task) => task.id !== id)

    setTasksList(newTaskList)
    setRenderTasksList(newTaskList)
    setAccomplishedTaskList((current) => [...current, accomplishedTask])
  }

  const changeTasksList = (change) => {
    if(change === 'all') {
      setRenderTasksList(tasksList)
    }

    if(change === 'performed') {
      setRenderTasksList(accomplishedTaskList)
    }
  }

  const changeControlTasksSelected = (selected) => {
    if(selected === 'all') {
      setControlTasksSelected({
        all: true,
        achieved: false
      })
    } else if(selected === 'achieved') {
      setControlTasksSelected({
        all: false,
        achieved: true
      })
    }
  }

  // MenuMobile
  const changeMenu = () => {
    setActiveMenu((current) => !current)
  }

  const data = {
    // User
    userName,
    addUserName,
    modalUser,
    changeModalUser,
    changeUserName,
    funcChangeUserName,

    // Finances
    movement,
    SetMovement,
    movementValue,
    SetMovementValue,
    nature,
    SetNature,
    financesList,
    addFinancesList,
    totalFinances,
    removeFinances,

    // Goals
    newGoal,
    addNewGoal,
    timeWindow,
    addTimeWindow,
    newGoalsList,
    addGoalsList,
    changeGoalsList,
    goalsAchieved,
    removeGoal,
    controlGoalsSelected,
    changeControlGoalsSelected,

    // Notes
    title,
    addTitle,
    content,
    addContent,
    notesList,
    addNote,
    removeNote,

    // Tasks
    task,
    addTaskTitle,
    renderTaskstList,
    addTask,
    removeTask,
    performTask,
    changeTasksList,
    controlTasksSelected,
    changeControlTasksSelected,

    // MenuMobile
    activeMenu,
    changeMenu,
  }

  return (
    <AppContext.Provider value={ data }>
      { children }
    </AppContext.Provider>
  )
}