import { useState } from "react";
import "./Reviews.css";
import { reviewTemplates } from "../data/db";
import { useSwipeable } from "react-swipeable";

export default function Reviews() {
    const [copied, setCopied] = useState(false);
    const [reviewIndex, setReviewIndex] = useState(
        Math.floor(
          Math.random() * reviewTemplates.length
        )
      );
      
      const [reviewText, setReviewText] = useState(
        reviewTemplates[reviewIndex]
      );
      const prevReview = () => {

        const prev =
          reviewIndex === 0
            ? reviewTemplates.length - 1
            : reviewIndex - 1;
      
        setReviewIndex(prev);
        setReviewText(
          reviewTemplates[prev]
        );
      };
      
      const nextReview = () => {
      
        const next =
          reviewIndex === reviewTemplates.length - 1
            ? 0
            : reviewIndex + 1;
      
        setReviewIndex(next);
        setReviewText(
          reviewTemplates[next]
        );
      };

      const handlers = useSwipeable({
        onSwipedLeft: nextReview,
        onSwipedRight: prevReview,
      });
      
  const copyReview = async () => {

    if (!reviewText.trim()) {
      alert("Please write a review first.");
      return;
    }
  
    await navigator.clipboard.writeText(
      reviewText
    );
  
    setCopied(true);
    window.open(
        "https://www.google.com/search?q=dip+projects&oq=dip+projects&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBwgFEAAYgAQyCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJMzE5MWowajE1qAIIsAIB8QUIoTomgW3e7Q&sourceid=chrome&ie=UTF-8#lrd=0x3be04d8a757f2d3b:0x16a8f8a6c0f0deb0,3,,,,",
      "_blank"
    );
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

      <div className="review-navigation">

<button
  type="button"
  className="review-nav-btn"
  onClick={() => {

    const prev =
      reviewIndex === 0
        ? reviewTemplates.length - 1
        : reviewIndex - 1;

    setReviewIndex(prev);
    setReviewText(
      reviewTemplates[prev]
    );

  }}
>
  ‹
</button>

<div className="review-counter">
  Review {reviewIndex + 1} of {reviewTemplates.length}
</div>

<button
  type="button"
  className="review-nav-btn"
  onClick={() => {

    const next =
      reviewIndex === reviewTemplates.length - 1
        ? 0
        : reviewIndex + 1;

    setReviewIndex(next);
    setReviewText(
      reviewTemplates[next]
    );

  }}
>
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