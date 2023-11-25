import './App.css';
import Hello from './Hello';
import Wrapper from './Wrappers';
import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import React, {useRef, useState, useMemo, useCallback} from 'react';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user => user.active).length
}

function App() {
  const text = 'abc'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  const [users, setUsers] = useState([
    {
      id:1,
      username: 'velopert',
      email: 'public.veloprt@gmail.com',
      active: true
    },
    {
      id:2,
      username: 'tester',
      email: 'tester@gmail.com',
      active: true
    },
    {
      id:3,
      username: 'liz',
      email: 'liz@gmail.com',
      active: false
    },
  ])

  const [inputs, setInputs] = useState({
    username: '',
    email: ''    
  })

  const {username, email} = inputs
  const onChange = (e) => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  
  const nextId = useRef(4);
  
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    // 추가시
    // setUsers([...users, user]) 
    setUsers(users => users.concat(user))
    setInputs({
      username: '',
      email: ''
    })
    nextId.current +=1
  }, [username, email])

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const onToggle = useCallback((id) => {
    setUsers(users => users.map(user => user.id === id ? {...user, active: !user.active} : user))
  }, [])
  // const count = countActiveUsers(users)
  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <Wrapper>
      <div style={style}>{text}</div>
      {/*주석 */}
      <Hello name='abc' color='red'/>
      <Hello isSpecial={true}/>
      <Hello color='pink'/>
      <Counter />
      {/* <InputSample /> */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>활성사용자 수 : {count}</div>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </Wrapper>
  )
}

export default App;
