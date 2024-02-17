import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex h-12 flex-row items-center justify-between bg-white/30 align-middle shadow-md backdrop-blur-md">
        <div>profile</div>
        <nav className="">
          <ul className="flex list-none flex-row items-center justify-evenly gap-12 align-middle">
            <li>
              <Link to={'/'} className="px-12 py-4 hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link to={'/'} className="px-12 py-4 hover:underline">
                Week
              </Link>
            </li>
            <li>
              <Link to={'/'} className="px-12 py-4 hover:underline">
                Budget
              </Link>
            </li>
          </ul>
        </nav>
        <div>settings</div>
      </div>
      <main className="px-12 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        asperiores repellendus, corporis officia quo est eaque excepturi
        corrupti dolorum, minus accusantium exercitationem debitis consequatur
        delectus sint enim. Amet, itaque eos. Atque nam eum, placeat eaque
        doloremque officia numquam quidem itaque voluptatem dignissimos, vero
        minus saepe incidunt eius nihil assumenda aspernatur! Repellendus
        accusamus porro voluptate, quo magnam nulla sint est inventore. Ea
        reiciendis beatae facilis sapiente neque, temporibus quos ipsa
        consequuntur omnis illo. Error molestias cupiditate eligendi adipisci
        nam beatae provident aut, doloremque velit excepturi! Cumque sunt
        voluptas ea laudantium nobis! Hic illo quod corporis quasi harum quia
        ipsum quidem. Libero porro beatae accusamus delectus magnam dolor ex
        aliquam quis expedita illum impedit ut alias eaque, nostrum vitae
        provident facere. Quisquam. Excepturi, molestiae assumenda tempora
        praesentium quibusdam aut ipsum deserunt fugit, mollitia corporis illo
        quidem, aspernatur reprehenderit aliquam! Officiis consequuntur sequi
        iste odio placeat commodi voluptas. Similique nulla quis sed
        consequatur. Dolor, quia! Molestiae obcaecati delectus maxime non ab
        accusantium soluta velit temporibus maiores numquam modi neque explicabo
        dolorum enim assumenda, similique consequuntur cum ipsam vero impedit
        cumque excepturi molestias id. Autem ut, quis iure consequatur
        exercitationem quod? Doloribus minima officia distinctio dolore, nemo
        dignissimos. Incidunt, quo? Adipisci, omnis voluptatibus dignissimos
        consectetur nisi numquam vel veniam qui consequatur necessitatibus!
        Nulla, unde! Reiciendis ullam veritatis nam iusto quia eos consequuntur
        rem placeat corporis quidem maiores, ut ratione numquam nostrum iste
        autem molestiae, esse doloribus. Fuga, odio magnam. Odit error dicta
        minus dignissimos. Sapiente dignissimos tenetur amet. Distinctio, amet
        animi veniam officia expedita neque, est saepe hic explicabo magnam
        error quas totam assumenda! Iste vero velit ipsam quo expedita, quas
        magnam corrupti ducimus. Cum deleniti eius quaerat provident ab alias
        aut consequatur commodi earum natus saepe eos quisquam, assumenda
        veritatis, debitis omnis incidunt voluptate, fugiat id odio deserunt
        sint labore! Voluptas, consectetur exercitationem?
      </main>
    </div>
  )
}

export default Home
