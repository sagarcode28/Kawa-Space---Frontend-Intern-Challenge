
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

:root{
    --primary-color: #E16259;
    --white-color: #fff;
    --bg-color: #F0F0F0;
    --black-color: #000;
}

*{
    font-family: 'Roboto', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
    transition:all .3s cubic-bezier(.16,.8,.62,1.52);
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

html::-webkit-scrollbar{
    width:1.3rem;
}

html::-webkit-scrollbar-track{
    background: var(--bg-color);
}

html::-webkit-scrollbar-thumb{
    background: var(--primary-color);
}

body{
    background: var(--bg-color);
}

header{
    width:100%;
    background: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    top:0; left: 0;
    z-index: 1000;
    padding:2.5rem 7%;
}

header .logo{
    font-size: 2.2rem;
    color: var(--black-color);
}

header .navbar ul{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}

header .navbar ul li{
    margin-left: 2.5rem;
}

header .navbar ul li a{
    color: var(--black-color);
    font-size: 1.7rem;
}

header .navbar ul li a.active,
header .navbar ul li a:hover{
    border-bottom: .2rem solid var(--primary-color);
    padding:.7rem 0;
}

.head {
    min-height: 50vh;
    display: grid;
    place-items: center;
    padding: 2rem;
    display: flex;
    justify-content: center;
}

.head .content{
    border-radius: 1rem;
    max-width: 80rem;
    background: var(--white-color);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    padding: 3rem 5rem;
    display: flex;
    align-items: center;
}

.head img {
    width: 10rem;
    height: 10rem;
    border-radius: 6rem;
}

.head h1 {
    font-weight: bold;
    font-size: 4rem;
    color: var(--primary-color);
    text-decoration-line: underline;
}

.head .text{
    margin-left: 4rem;
}

.head p {
    font-size: 2rem;
    line-height: 2.8rem;
    color:var(--black-color);
    padding:1.5rem 0;
}

.head span {
    color: #666;
    font-size: 2rem;
}


main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap:1.2rem;
    margin-left: 8.5rem;
    margin-right: 8.5rem;
}
main .card {
    padding: 2rem;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    background: var(--white-color);
}

main .card span {
    font-size: 14px;
    font-weight: normal;
    line-height: 150%;
}

main .card h3 {
    font-size: 20px;
    line-height: 135%;
    margin: 2px 0;
}
main .card p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    color: var(--primary-color);
}

main .card:active,
main .card:hover {
  background: #a259ff;
  color: var(--white-color);
  cursor: pointer;
}




/* media queries  */

@media (max-width:991px){

    html{
        font-size: 55%;
    }

}

@media (max-width:768px){

    .head .content{
        text-align: center;
    }

    .head .content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}

@media (max-width:500px){

    html{
        font-size: 50%;
    }

    .head .content{
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

}
`

export default GlobalStyle;