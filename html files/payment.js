<script>
    const form = document.querySelector('.payment-container');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const donationAmount = document.querySelector('.amount input').value;
        const currency = document.getElementById('currency').value;
        const accountHolder = document.querySelector('.owner input').value;
        const cvvNumber = document.querySelector('.cvv input').value;
        const cardNumber = document.querySelector('.card-number input').value;
        const selectedMonth = document.getElementById('months').value;
        const selectedYear = document.getElementById('years').value;

        if (donationAmount === '' || currency === '' || accountHolder === '' || cvvNumber === '' || cardNumber === '' || selectedMonth === '' || selectedYear === '') {
            alert('Please fill in all the required fields.');
            return;
        }

        console.log('Donation Amount:', donationAmount);
        console.log('Currency:', currency);
        console.log('Account Holder:', accountHolder);
        console.log('CVV Number:', cvvNumber);
        console.log('Card Number:', cardNumber);
        console.log('Expiry Month:', selectedMonth);
        console.log('Expiry Year:', selectedYear);
    };

    form.addEventListener('submit', handleFormSubmit);
</script>
