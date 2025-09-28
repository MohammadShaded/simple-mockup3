import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <SimpleMockup memb />
  )
}

function SimpleMockup() {
  const [filterText, setFilterText] = useState("")
  return (
    <div className='container' >
      <Title />
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <MemberList filterText={filterText} />
      <ControlButtons />
    </div>
  )
}

function Title() {
  return <p className="title">Add members to front-end development team</p>
}

function SearchBar({ filterText, setFilterText }) {

  return (
    <input type="text"
      className="search-bar"
      placeholder="Find members..."
      onChange={(e) => setFilterText(e.target.value)} />
  )
}

function MemberList({ filterText }) {
  const [members, setMembers] = useState(membersArray);

  const handleSelect = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, selected: !m.selected } : m
      )
    );
  };

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="member-list">
      {filteredMembers.map((member) => (
        <Member
          key={member.id}
          member={member}
          onSelect={() => handleSelect(member.id)}
        />
      ))}
    </div>
  );
}
function Member({ member, onSelect }) {
  const src = 'user-solid-full.svg';
  return (
    <div className={`member ${member.selected ? "selected" : ""}`}>
      <div className="member-info">
        <img src="http://localhost:5173/src/user-solid-full.svg" alt="User Logo" class="logo" />

        <p>{member.name}</p>
      </div>
      <input type="checkbox" checked={member.selected} onChange={onSelect} />
    </div>
  )
}

function ControlButtons() {
  return (
    <div className="control-buttons">
      <Button primary={true} text="cancel" />
      <Button primary={true} text="save" />
    </div>
  )
}
function Button({ primary, text }) {
  return (
    <button className={`button ${text}`}>
      {text}
    </button>
  )
}

const membersArray = [
  { id: 1, name: "Carolien Bloeme", selected: false },
  { id: 2, name: "Sun Jun", selected: true },
  { id: 3, name: "Song Bao", selected: false },
  { id: 4, name: "Olivia Arribas", selected: true },
  { id: 5, name: "Bonginkosi Mdlalalana", selected: false },
  { id: 6, name: "Arina Belomestnykh", selected: true },
  { id: 7, name: "Jacqueline Likoki", selected: true }
];




export default App
