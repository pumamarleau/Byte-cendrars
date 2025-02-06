const flags = {
    form1: "FLAG1={4RCJJWYVD2TYK489EBS1}",
    form2: "flag2={DsPlPoMiCM9pCRmE79Fd}",
    form3: "flag3={89WqN5X5xGwka9BaV5m5}",
    form4: "flag4={ReverseIsFunXyZ}",
    form5: "flag5={LogsRevealSecrets!}",
};

let correctFlags = 0;

for (let i = 1; i <= 5; i++) {
    const formId = `form${i}`;
    const flag = flags[formId];
    const input = document.getElementById(`flag${i}`);
    const form = document.getElementById(formId);
    const button = document.getElementById(`button${i}`);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let result;
        if (input.value === flag) {
            input.disabled = true;
            button.disabled = true;
            button.innerHTML = '<ion-icon name="lock-open-outline"></ion-icon>';
            result = 'juste';

            correctFlags += 1;
            if (correctFlags === 5) {
                submit.style.display = 'inline';
            }
        } else {
            result = 'faux';
        }

        console.log(result);
        form.reset();
    });
}