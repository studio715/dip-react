import { useState } from "react";
import "./Reviews.css";
import { reviewTemplates } from "../data/db";
import { useSwipeable } from "react-swipeable";

export default function Reviews() {
    const [copied, setCopied] = useState(false);
    const [category, setCategory] =
    useState("residential");

    const [reviewIndex, setReviewIndex] =
    useState(
        Math.floor(
        Math.random() *
        reviewTemplates.residential.length
        )
    );

    const [reviewText, setReviewText] =
    useState(
        reviewTemplates.residential[
        reviewIndex
        ]
    );

    const changeCategory = (newCategory) => {

        const randomIndex =
          Math.floor(
            Math.random() *
            reviewTemplates[newCategory]
              .length
          );
      
        setCategory(newCategory);
      
        setReviewIndex(randomIndex);
      
        setReviewText(
          reviewTemplates[newCategory]
            [randomIndex]
        );
      };

      const prevReview = () => {
        const reviews =
            reviewTemplates[category];

        const prev =
            reviewIndex === 0
            ? reviews.length - 1
            : reviewIndex - 1;

        setReviewIndex(prev);

        setReviewText(
            reviews[prev]
        );
      };
      
      const nextReview = () => {

        const reviews =
          reviewTemplates[category];
      
        const next =
          reviewIndex === reviews.length - 1
            ? 0
            : reviewIndex + 1;
      
        setReviewIndex(next);
      
        setReviewText(
          reviews[next]
        );
      };
      
      const handlers = useSwipeable({
        onSwipedLeft: nextReview,
        onSwipedRight: prevReview,
      });

  // const copyReview = async () => {

  //   if (!reviewText.trim()) {
  //     alert("Please write a review first.");
  //     return;
  //   }
    
  //   await navigator.clipboard.writeText(
  //     reviewText
  //   );
  
  //   setCopied(true);
  //   window.open(
  //       "https://www.google.com/search?q=dip+projects&oq=dip+projects&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBwgFEAAYgAQyCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJMzE5MWowajE1qAIIsAIB8QUIoTomgW3e7Q&sourceid=chrome&ie=UTF-8#lrd=0x3be04d8a757f2d3b:0x16a8f8a6c0f0deb0,3,,,,",
  //     "_blank"
  //   );
  // };

  const copyReview = async () => {
    if (!reviewText.trim()) {
      alert("Please write a review first.");
      return;
    }
  
    try {
      await navigator.clipboard.writeText(reviewText);
  
      setCopied(true);
  
      const isMobile =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        );
  
      const mobileLink =
        "https://www.google.com/search?sca_esv=fd85c60ee94a050f&sxsrf=ANbL-n5XyR72ikTT_e5UCbwL8B2Kux2Vyg:1780123038876&q=dip+projects+reviews&uds=ALYpb_n4_4R3TXfRbIE0QK-84RdSa6E1exp7XBWAibgQNZ73xVQkx1mmxkbA3W7z0lgnnVuyVp8UzPHyU7r1pe-xPhjHbmIfqyy5xS1oSekJ-Nt5wZlnqUWU8A0-TytPEPO-HwV14cMUX-FITZWIMd7LnqDqI9qiGbDVOhSMyyqBqS2cxkWY5Cx349uLjifnz6Q3ADNJjIhsz8HPH0mK74u4NZZT4Gg-RqiUR8ovEE-RbS-qwvCgNr4XIto4o0n24XzjizKYdabLrTDs_a2XFPuDSl28j0y9Jhtml55-2IRGySls5FzgAiADTxgel_MT7q78vWiY69rQY4ykgYonBB0_H-slsNSjgx5PKGPsHC_lbHTvR0SM9QnZ2AbPobn9lecSrYatg4-1&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX6wP335fpFgyxFPB-SeEhnsjggzuIaZLBJOjqPzpdyesR_gu-A0ko8XjIkgLOgRFxMYRIcCCdYm4Lbtz837QwGYRhu4&sa=X&ved=2ahUKEwiz042Ls-CUAxXGT0EAHY5NCMoQk8gLegQIIBAB&ictx=1&biw=354&bih=752&dpr=3.5#ebo=2";
  
      const desktopLink =
        "https://www.google.com/search?sca_esv=fd85c60ee94a050f&sxsrf=ANbL-n6TUy1jlHjVw9XBceAhgyqceCbShA:1780123258319&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOX6wP335fpFgyxFPB-SeEhns_yR5r-_kkRhyvVTTU2Th7TrMpEfh3oCHZvG6ZE2U5irVVSeyzoP62WzdcecLVyEbX2CtIYR9SDki61x1HNeyhwd3rDJi_D5oQGZLnKyifCX2rDc%3D&q=Dip+Projects+%28Project+management+consultant%29+Reviews&sa=X&ved=2ahUKEwj4wt_zs-CUAxUihGMGHV_dDDoQ0bkNegQIHRAF&biw=1920&bih=945&dpr=1#lrd=0x3be04d8a757f2d3b:0x16a8f8a6c0f0deb0,3,,,,";
  
      setTimeout(() => {
        window.location.href = isMobile
          ? mobileLink
          : desktopLink;
      }, 300);
  
    } catch (err) {
      console.error(err);
      alert("Unable to copy review.");
    }
  };

  return (
    <div className="review-helper">
      <h1>
        Share Your Experience
      </h1>
      <p>
        Copy/Write the review below and
        paste it on Google.
      </p>
      <div className="review-actions">
      <div className="review-categories">

      <button
  className={category === "residential" ? "active" : ""}
  onClick={() => changeCategory("residential")}
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H15v-5H9v5H4a1 1 0 0 1-1-1V10.5z" />
  </svg>

  Residential
</button>
<button
  className={category === "commercial" ? "active" : ""}
  onClick={() => changeCategory("commercial")}
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
  </svg>

  Commercial
</button>
<button
  className={category === "industrial" ? "active" : ""}
  onClick={() => changeCategory("industrial")}
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 21V9l7 4V9l11 6v6H3z" />
    <path d="M7 21v-4" />
    <path d="M12 21v-3" />
    <path d="M17 21v-2" />
  </svg>

  Industrial
</button>
</div>
      <div className="review-navigation">


 <button type="button" className="review-nav-btn" onClick={prevReview}>
  ‹
</button>

<div className="review-counter">
  Try Another Review
</div>

<button type="button" className="review-nav-btn" onClick={nextReview}>
  ›
</button>

</div>

    </div>

    <div {...handlers}><textarea value={reviewText} onChange={(e) =>setReviewText(e.target.value)} placeholder="Write your review here..."/></div>
      <div className="review-tip">
        Feel free to edit, personalise or completely rewrite
        the review before posting it on Google.
     </div>
      <button
        onClick={copyReview}
      >
        Copy Review & Open Google
      </button>{copied && (
        <div className="review-success">
            ✓ Review copied successfully.
            Google Reviews has been opened in a new tab.
        </div>
        )}
    </div>
  );
}