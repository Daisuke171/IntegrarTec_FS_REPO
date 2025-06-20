const $modalOverlay = document.getElementById('modalOverlay')
const $openModalBtn = document.getElementById('openModalBtn')
const $closeBtn = document.getElementById('closeBtn')
const $confirmBtn = document.getElementById('confirmBtn')
const $cancelBtn = document.getElementById('cancelBtn')


$openModalBtn.addEventListener('click', () => {
    $modalOverlay.style.display = 'flex'
})

const closeModal = () => {
    $modalOverlay.style.display = 'none'
}

$closeBtn.addEventListener('click', closeModal)
$cancelBtn.addEventListener('click', () => {
    alert('Cancelado')
    closeModal()
})
$confirmBtn.addEventListener('click', () => {
    alert('Confirmado')
    closeModal()
})
