import { Link } from "react-router-dom";
import "./Home.css"
import useFetch from "../../components/Hooks/useFetch"
import ArticleItem from "../../components/article/ArticleItem";
import { Swiper , SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"



function Home() {
    const [posts, isPending, error] = useFetch('http://localhost:5000/articles?page=1&limit=4')
    

    return (
        <main className="home-page">
            <section className="hero">
                <div className="container" dir="rtl">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h1>دنیای برنامه نویسی
                                <br /> از اینجا شروع می شود
                            </h1>
                            <p>مقالات کاربردی و آموزنده در زمینه برنامه نویسی و تکنولوژی</p>
                            <a href="/posts" className="btn btn-outline-dark btn-lg">مشاهده مقالات</a>
                            
                        </div>
                        <div className="col-md-7">
                            <div className="hero-box">
                                <img src="https://ychef.files.bbci.co.uk/2000x1125/p073l4xc.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="latest-articles container my-5" dir="rtl">
                <h2 className="latest-title mb-4">آخرین مقالات</h2>

              <div className="latest-carousel">

    <button className="swiper-prev">‹</button>

    <Swiper
        modules={[Navigation]}
        navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next"
        }}
        spaceBetween={20}
            breakpoints={{
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }}
        grabCursor={true}
    >
        {posts?.articles?.map(post => (
            <SwiperSlide key={post._id}>
                <ArticleItem article={post} />
            </SwiperSlide>
        ))}
    </Swiper>

    <button className="swiper-next">›</button>

</div>
            </section>
        </main>
    )
       
}

export default Home;