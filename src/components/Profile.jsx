function Profile() {
  return (
    <section className="containeer">
        <h1 className="heading">Profile Card Day 4</h1>
      <div className="grid grid-two-cols">
        <ProfileCard
          name="Asmin Stha"
          age={22}
          greetings={
            <div>
              <strong>
                Hello Guys ! Its Day4 Of learning Utsav Fun with Learning.
              </strong>
            </div>
          }
        >
          <p>Learning : React Js , Props and Creating a Profile Card </p>
          <button>Passing Jsx as Props</button>
        </ProfileCard>
        <ProfileCard
          name="Ram Thapa"
          age={29}
          greetings={
            <div>
              <strong>
                Hello Guys ! Its Day4 Of learning Utsav Fun with Learning.
              </strong>
            </div>
          }
        >
          <p>Learning : Web Dev , Photoshop </p>
          <button>Passing Jsx as Props</button>
        </ProfileCard>
      </div>
    </section>
  );
}

export default Profile;

// function ProfileCard(props) {
//   return (
//     <>
//       <div className="frame">
//         <h2>Name:{props.name}</h2>
//         <p>Age:{props.age}</p>
//         <p>{props.greetings}</p>
//         <div>{props.children}</div>
//       </div>
//     </>
//   );
// }

// destructing
function ProfileCard({name,age,greetings,children}) {
    return (
      <>
        <div className="frame">
          <h2>Name:{name}</h2>
          <p>Age:{age}</p>
          <p>{greetings}</p>
          <div>{children}</div>
        </div>
      </>
    );
  }
  