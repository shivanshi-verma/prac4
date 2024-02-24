function validateAgeCategory() {
    const ageCategory = document.getElementById('ageCategory').value;
    const ageError = document.getElementById('ageError');
    if (ageCategory === 'child') {
      ageError.textContent = '';
    } else {
      ageError.textContent = '';
    }
  }

  function validateForm() {
    const ageCategory = document.getElementById('ageCategory').value;
    const entryCategory = document.getElementById('entryCategory').value;
    const ageError = document.getElementById('ageError');
    const entryError = document.getElementById('entryError');

    let isValid = true;

    if (!ageCategory) {
      ageError.textContent = 'Please select an age category';
      isValid = false;
    } else {
      ageError.textContent = '';
    }

    if (!entryCategory) {
      entryError.textContent = 'Please select an entry category';
      isValid = false;
    } else {
      entryError.textContent = '';
    }

    if (ageCategory === 'child' && isNaN(entryCategory) && (ageCategory < 12)) {
      ageError.textContent = 'Children must be under 12 years old';
      isValid = false;
    } else if (ageCategory === 'senior' && isNaN(entryCategory) && (ageCategory >= 60)) {
      ageError.textContent = 'Seniors must be 60 years old or older';
      isValid = false;
    }

    if (isValid) {
      calculateEntryFee(ageCategory, entryCategory);
    }

    return isValid;
  }

  function calculateEntryFee(ageCategory, entryCategory) {
    let entryFee = 0;
    if (ageCategory === 'child') {
      entryFee = 300;
    } else if (ageCategory === 'adult') {
      if (entryCategory === 'college') {
        entryFee = 400;
      } else if (entryCategory === 'family') {
        entryFee = 500;
      }
    } else if (ageCategory === 'senior') {
      entryFee = 450;
    }

    alert("Entry Fee: Rs." + entryFee);
  }