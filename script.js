document.addEventListener('DOMContentLoaded', function () {
  var markTakenButton = document.querySelector('[data-mark-taken]');

  if (!markTakenButton) {
    return;
  }

  markTakenButton.addEventListener('click', function () {
    var medicationCard = document.querySelector('[data-medication-card]');
    var status = document.querySelector('[data-medication-status]');
    var progressBar = document.querySelector('.progress-bar');
    var progressCount = document.querySelector('.progress-count');
    var progressTitle = document.querySelector('.progress-card h3');
    var progressNote = document.querySelector('.card-note');

    if (!medicationCard || !status) {
      return;
    }

    medicationCard.classList.add('is-taken');
    status.textContent = 'Tomada';
    status.classList.remove('alert');
    status.classList.add('success');
    markTakenButton.textContent = 'Toma registrada';
    markTakenButton.disabled = true;

    if (progressBar) {
      progressBar.style.width = '75%';
    }

    if (progressCount) {
      progressCount.textContent = '75%';
    }

    if (progressTitle) {
      progressTitle.textContent = '3 de 4 tomas registradas';
    }

    if (progressNote) {
      progressNote.textContent = 'Te queda 1 medicamento pendiente para completar la rutina del dia.';
    }
  });
});
