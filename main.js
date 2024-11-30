
document.addEventListener("DOMContentLoaded", () => {
    viewDetails(1);
  });

  
  function viewDetails(option) {
    // console.log(option);
  
    const details = document.querySelectorAll(".extra-options");

    details.forEach((detail) => {
        
     //  detail.classList.toggle("hidden");

      detail.classList.add("hidden");

    });
  
    const selectedDetails = document.getElementById(`extra-options-content${option}`);
    //  console.log(selectedDetails);
     
    if (selectedDetails) {
      selectedDetails.classList.remove("hidden");
    }
  
    const radioButton = document.getElementById(`radio${option}`);

    if (radioButton) {
      radioButton.checked = true;
    }
  }
  