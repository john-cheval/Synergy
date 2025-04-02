import Bredcumb from "@/app/_components/page_components/Bredcumb";
import Link from "next/link";

export const metadata = {
  title: "Synergy | Blogs",
  description: "Your Strategic Partner for Business Excellence",
};
export const dynamic = 'force-dynamic'
export default async function PageBlogs({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(`${APIURL}/cms/getAll/Blogs`, {cache: 'no-store' }).then((res) => {   
   return res.json();
  });
  data.reverse();
  let [firstBlog] = data;
  const truncateText = (text, length = 200) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };
  return (
    <>
      {/* <!--====== Banner part start ======--> */}
      <section className="banner-section wow fadeInUp blog-banner-sec">
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <img src="/img/inner-banner.png" />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">  
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        Blogs
                      </h1>
                    </div>
                    <Bredcumb title="Blogs"/>
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-3 text-right">
                  <div className="bredcumb">
                    <ul>
                      <li>
                        <a href="/"> Home </a>
                      </li>
                      <li> - </li>
                      <li> Blog </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="row justify-content-center text-white blog-title-row mt-5">
                <div className="col-xl-8 col-lg-8 pl-lg-0">
                  <div className="blog-banner h-100">
                    <img
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${firstBlog?.image}`}
                      alt={firstBlog.blog_title}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 d-flex flex-column p-lg-5">
                  <div className="blog-title-content mb-2">
                    <h3>{firstBlog.blog_title}</h3>
                    <p>
                      {truncateText(firstBlog.content.replace(/<[^>]*>/g, ""))}
                    </p>
                    <Link href={`/blogs/${firstBlog.slug}`}> Read More </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Banner part end ======--> */}

      {/* <!--====== Feature Part start ======--> */}

      <section className="blog-section section-gap wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
        <div className="container">
          {data.length == 1 && <h4>More Blogs Are Coming Soon!</h4>}
          <div className="row justify-content-left">
            {data.length > 1 &&
              data.slice(1).map((item) => {
                return (
                  <div key={item.id} className="col-lg-4">
                    <div className="blog-box">
                      <div className="blog-img">
                        <Link href={`/blogs/${item.slug}`}>
                          <img
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`}
                            alt={item.blog_title}
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <p>{item.blog_title}</p>
                        <a href={`/blogs/${item.slug}`}> Read More </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
