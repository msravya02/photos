// script.js

document.addEventListener('DOMContentLoaded', function() {
    const gallerySection = document.querySelector('.photo-grid');
    const photos = [
      'bulb off.jpg', 'on bulb.jpg', // Add your photo URLs here
    ];
  
    
    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      gallerySection.appendChild(img);
    });
  
    
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const date = event.target.date.value;
      alert(`Thank you ${name}! Your session on ${date} has been booked.`);
      
    });
  
    
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const feedback = event.target.feedbackText.value;
      alert('Thank you for your feedback!');
     
    });
  
    
    document.getElementById('share-facebook').addEventListener('click', function() {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-share-dialog', 'width=800,height=600');
      return false;
    });
  
    document.getElementById('share-twitter').addEventListener('click', function() {
      window.open('https://twitter.com/intent/tweet?url=' + window.location.href, 'twitter-share-dialog', 'width=800,height=600');
      return false;
    });
  
    document.getElementById('share-instagram').addEventListener('click', function() {
      alert('Instagram sharing is not directly supported via web. Please share manually.');
      return false;
    });
  });
  