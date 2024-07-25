# Angular Capture Vision Sample
This project demonstrates how to utilize the Dynamsoft Capture Vision SDK for detecting barcodes, documents, MRZ, and more in Angular applications.

## Features
- **Barcode Scanner**

    https://github.com/user-attachments/assets/98de98b3-ac28-49a6-a520-11202e48e7ca

- **Document Scanner**

    https://github.com/user-attachments/assets/17cf6449-f1b6-4644-89fc-d3f5f05009f9


## Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- Angular CLI 

    ```bash
    npm install -g @angular/cli
    ng --version
    ```
- [Dynamsoft Capture Vision Trial License](https://www.dynamsoft.com/customer/license/trialLicense)

  ![Dynamsoft Capture Vision Trial License](https://www.dynamsoft.com/codepool/img/2024/07/capture-vision-suite-license.png)

## Online Demo
[Try the Demo](https://yushulx.me/angular-barcode-qr-code-scanner/)


## Usage
1. **Set the License Key**: Update the `products.ts` file with your license key.
    
    ```typescript
    LicenseManager.initLicense('LICENSE-KEY', true);
    ```
    
2. **Install dependencies**:
    
    ```bash
    npm install
    ```

3. **Run the Application**:
    
    ```bash
    ng serve --ssl
    ```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Blog
- [How to Build Angular Barcode and QR Code Scanner Apps from Scratch](https://www.dynamsoft.com/codepool/angular-barcode-qr-code-scanner.html)
