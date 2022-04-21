import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';
import Link from "next/link";

export default function Home() {
    return (

        <div className={styles.container}>

            <header>
                <MDBNavbar expand='lg' light bgColor='white'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <MDBIcon fas icon='bars' />
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse headerdiv' id='navbarExample01'>
                            <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/donate'>Donate</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>
            </header>
            <Head>

                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

                <title>BinaryHeart in the News</title>
                <meta name="description" content="Bridging the digital divide" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favpng.png" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
                <meta name="Description"
                      content="Author: Malachi Noel, Maryanne Xu, Artharva Metkar, Megan Lu, Isaac Noel"/>
            </Head>

            <main className={styles.main}>


                <h1 className={styles.semititle}>
                    BinaryHeart in the News!
                </h1>



                <p className={styles.description}>
                    Follow along our journey to<code className={styles.code}>spread digital
                    access</code>. Check out our latest news updates here!
                </p>

                <div
                    className ={styles.static_card}
                    style={{
                        border: "1px solid #f57192",
                        "background-color": "rgb(255, 240, 243)"
                    }}
                >
                    <h3>
                        <center>Press Inquiries</center>
                    </h3>
                    <p className={styles.description}>
                        If you&lsquo;re a member of the press, please email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org">contact@binaryheart.org</a>.
                    </p>

                </div>
                <p className={styles.static_card}
                   style={{
                       border: "1px solid #C8F0C8",
                       "background-color": "rgb(200, 240, 200)"
                   }}
                >
                <td>
                    <h2><p><b> <a className={styles.maryanne} href="https://newtriernews.org/news/2021/05/19/new-trier-club-receives-service-award/">
                        BinaryHeart Receives Outstanding Youth Service Award! ⮕</a></b></p></h2>

                    <p> The Volunteer Center, a North Shore non-profit volunteering organization,
                        awards BinaryHeart for our e-learning donations.</p>
                </td>
                </p>

                <div className ={styles.static_card}>
                    <p className={styles.description}>
                        <table>
                            <tr>

                                <td width="40%">
                                    <img className={styles.scalingimage} src="/service award.png" alt="service award" />
                                </td>
                                <td>
                                    <div className={styles.pressChart}>
                                        <td width="25%">
                                            <p> photo </p>
                                        </td>

                                        <td>
                                            <h2><p><b> <a className={styles.maryanne} href="https://newtriernews.org/news/2021/05/19/new-trier-club-receives-service-award/">
                                                BinaryHeart Receives Outstanding Youth Service Award! ⮕</a></b></p></h2>

                                            <p> The Volunteer Center, a North Shore non-profit volunteering organization,
                                                awards BinaryHeart for our e-learning donations.</p>

                                            <p></p>

                                            <p><b> <a className={styles.maryanne} href="https://hu-hu.facebook.com/newtrieref/videos/binaryheart-outstanding-youth-volunteer-awards-video/274212744104600/">
                                                Watch the video here!</a></b></p>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </td>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="30%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Nicholas Sutherland </b>
                                    <p>Howdy! I&lsquo;m Nicholas, a senior at New Trier High School,
                                        and this is my third year at BinaryHeart. I usually end up building shelves,
                                        organizing screwdrivers, and working on our workspace during club.
                                        Oh yeah, and I invented the microwave burrito.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Rom Fradkin </b>
                                    <p>Rom Fradkin (5’ 9’’, 150lbs) is a senior at New Trier High School.
                                        He&lsquo;s volunteered for BinaryHeart since freshman year. He owns four cows.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Julia Hudson  </b>
                                    <p>Hey! I&lsquo;m Julia, a sophomore at New Trier High School.
                                        I&lsquo;ve volunteered for BinaryHeart for two years now.
                                        When not fixing computers, I work on our website,
                                        manage our inventory system, and have plans for chapter expansion.
                                        </p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Andrew Gill </b>
                                    <p>Hello, I&lsquo;m Andrew! :) I&lsquo;m a senior at New Trier High School,
                                        and I&lsquo;ve been in the club since my sophomore year.
                                        I&lsquo;m usually in charge of organization, whether on the task sheet or
                                        in the closet I spent an entire year setting up.
                                        By the way, I&lsquo;ve been to the North Pole!
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </p>
                </div>

                <Link href="/">
                    <a className={styles.card}>
                        <h2>Back to the launch page &rarr;</h2>
                    </a>
                </Link>
            </main>



        </div>
    )
}
