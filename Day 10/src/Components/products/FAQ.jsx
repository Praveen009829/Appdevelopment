import React from 'react';
import "../../Styles/FAQ.css";

function FAQ() {
  const faqData = [
    {
      question: 'What is Classy Lens?',
      answer:
        'Classy Lens is an online eyewear and sunglasses boutique that offers a wide range of stylish and high-quality eyewear products.',
    },
    {
      question: 'How can I place an order?',
      answer:
        'To place an order, simply browse our catalog, select the eyewear you like,  and click "Add to Cart." Then, follow the checkout process to complete your order.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods, including credit/debit cards, PayPal, and more. You can find the full list of accepted payment methods at the checkout.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Shipping times may vary depending on your location and the product you order. We offer both standard and expedited shipping options. You can check the estimated delivery time during the checkout process.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We have a hassle-free return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please review our return policy for detailed instructions.',
    },
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
