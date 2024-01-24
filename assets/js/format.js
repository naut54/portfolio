function formatPhoneNumber(input) {
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/(\d{3})(\d{0,3})(\d{0,3}).*/, '$1 $2 $3').trim();
}

function formatPostalCode(input) {
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/(\d{5}).*/, '$1').trim();
}