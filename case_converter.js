<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        textarea {
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
        }
        button {
            padding: 10px 20px;
            margin-right: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class='title'>Case Converter</div>
    <textarea id="text-area"></textarea>
    <button id='upper-case'>Upper Case</button>
    <button id='lower-case'>Lower Case</button>
    <button id='proper-case'>Proper Case</button>
    <button id='sentence-case'>Sentence Case</button>
    <button id='save-text-file'>Save Text File</button>

    <script>
        
        const textArea = document.getElementById('text-area');
        const upperCaseButton = document.getElementById('upper-case');
        const lowerCaseButton = document.getElementById('lower-case');
        const properCaseButton = document.getElementById('proper-case');
        const sentenceCaseButton = document.getElementById('sentence-case');
        const saveTextFileButton = document.getElementById('save-text-file');

        upperCaseButton.addEventListener('click', () => {
            textArea.value = textArea.value.toUpperCase();
        });

        lowerCaseButton.addEventListener('click', () => {
            textArea.value = textArea.value.toLowerCase();
        });

        properCaseButton.addEventListener('click', () => {
            textArea.value = textArea.value.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        });

        sentenceCaseButton.addEventListener('click', () => {
            textArea.value = textArea.value.split('. ').map(sentence => {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
            }).join('. ');
        });

        function download(filename, text) {
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }

        saveTextFileButton.addEventListener('click', () => {
            const text = textArea.value;
            download("text.txt", text);
        });
    </script>
</body>
</html>
