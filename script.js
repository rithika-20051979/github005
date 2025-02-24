// Handle daily tips rotation
document.getElementById('new-tip').addEventListener('click', function() {
  const tips = [
      'Always keep your pet hydrated!',
      'Brush your pet fur regularly.',
      'Exercise your pet daily for good health.',
      'Make sure your pet has a balanced diet.',
      'Regular vet check-ups are essential.'
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById('tip-of-the-day').innerText = randomTip;
});

// Handle form submission for the directory
document.getElementById('directory-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const serviceName = document.getElementById('service-name').value;
  const serviceType = document.getElementById('service-type').value;
  const serviceLocation = document.getElementById('service-location').value;
  
  const li = document.createElement('li');
  li.textContent = `${serviceName} - ${serviceType} - ${serviceLocation}`;
  document.getElementById('services-list').appendChild(li);

  // Clear the form
  document.getElementById('directory-form').reset();
});
