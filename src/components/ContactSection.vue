<template>
    <footer>
        <div class="footer-item cel-item">
            <div class="footer-item-name">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                Telephone
            </div>
            <div class="footer-item-value">+57 3113454507</div>
        </div>

        <div class="footer-item mail-item">
            <div class="footer-item-name">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                E-mail
            </div>
            <div class="footer-item-value">jasidmartinez21@gmail.com</div>
        </div>

        <div class="footer-item location-item">
            <div class="footer-item-name">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                Location
            </div>
            <div class="footer-item-value">Barranquilla, Atlántico, Colombia</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'ContactSection'
}
</script>

<style scoped>
footer{
	background-color: rgb(28, 28, 29);
	padding: 100px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10% 90%;
}

.footer-item{
	color: white;
}

.footer-item-name{
	width: 100%;
	text-align: center;
	font-weight: bold;
}

.footer-item-value{
	width: 100%;
	text-align: center;
}

@media(max-width: 730px){
	footer{
		grid-template-rows: 50% 50%;
		grid-template-columns: repeat(4, 25%);
	}

	.cel-item{
		grid-row: 1/2;
		grid-column: 1/3;
	}

	.mail-item{
		grid-row: 1/2;
		grid-column: 3/5;
	}

	.location-item{
		grid-row: 2/3;
		grid-column: 2/4;
	}
}

@media(max-width: 630px){
	footer{
		padding: 50px;
	}
}

@media(max-width: 560px){
	footer{
		padding: 30px;
		display: block;
	}

	.footer-item{
		margin-bottom: 10px;
	}
}
</style>