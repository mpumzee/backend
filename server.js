const WebSocket = require("ws");

const PORT = 3000;
const DEFAULT_INTERVAL = 1000;

// Create a WebSocket server
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {
   console.log("Client connected");

   // Send Welcome message
      if (ws.readyState === WebSocket.OPEN) {         
        ws.send(JSON.stringify({ message: "Welcome to Axis Solutions. Enter 1 for prices, 2 for banking details and your Error Code for error solutions", owner:"assistant" }));
      }

   //Business logic starts here
   ws.on("message", (message) => {
    let errorCode = message.toString('utf8').replace(/"/g, "");
    console.log(errorCode);
    switch (errorCode) {
        case "1":
            ws.send(JSON.stringify({message:"Revmax Device 595USD", owner:"assistant"}))
            ws.send(JSON.stringify({message:"RevMax License 185USD ", owner:"assistant"}))
            ws.send(JSON.stringify({message:"FDMS implementations 150USD ", owner:"assistant"}))
            ws.send(JSON.stringify({message:"Call-Out Fee 100USD ", owner:"assistant"}))
            ws.send(JSON.stringify({message:"Re-Installation of Revmax 60USD", owner:"assistant"}))
            break;
        case "2":
            ws.send(JSON.stringify({message:"Account Name: AXIS SOLUTIONS PRIVATE LIMITED | Bank: STANBIC BANK ZIMBABWE | Usd Account : 9140000955751 |Branch: BELGRAVIA | Currency: NOSTRO", owner:"assistant"}))
            break;
        case "RevMaxnotfound":
            ws.send(JSON.stringify({ message: "This error means that no RevMax device is plugged into your machine. Please check your hardware.", owner: "assistant" }));
            break;
        case "Init error: drive letter missing/incorrect":
            ws.send(JSON.stringify({ message: "This results because the API has failed to find the drive letter or RevMax is not connected. Please check your hardware.", owner: "assistant" }));
            break;
        case "PINerror":
            ws.send(JSON.stringify({ message: "Please contact Axis Solutions if you encounter this error.", owner: "assistant" }));
            break;
        case "Please login first":
            ws.send(JSON.stringify({ message: "Please unplug and reinsert the device if you encounter this error. If this does not work, restart your application. If both fail, please contact Axis Solutions.", owner: "assistant" }));
            break;
        case "ReadDataerror":
            ws.send(JSON.stringify({ message: "Please unplug and reinsert the device if you encounter this error. If this does not work, restart your application. If both fail, please contact Axis Solutions.", owner: "assistant" }));
            break;
        case "REVMAXNotRegistered":
            ws.send(JSON.stringify({ message: "This response means that the card is unassigned and not registered with the tax authority. You are advised to bring this card to us and follow the proper registration channels to make it usable.", owner: "assistant" }));
            break;
        case "Init error":
            ws.send(JSON.stringify({ message: "Please unplug and reinsert the device if you encounter this error. If this does not work, restart your application. If both fail, please contact Axis Solutions.", owner: "assistant" }));
            break;
        case "Invoice not Found":
            ws.send(JSON.stringify({ message: "The requested transaction is not present in the fiscal memory.", owner: "assistant" }));
            break;
        case "Transaction Error":
            ws.send(JSON.stringify({ message: "This error occurs when the transaction has failed to go through. Please check if you device is inserted correctly. Also, ensure your USB port is not faulty.", owner: "assistant" }));
            break;
        case "Build Z Report Error":
            ws.send(JSON.stringify({ message: "This error results from the API failing to generate the Z file to be sent by RevMax. Try unplugging and then reinserting your device.", owner: "assistant" }));
            break;
        case "Build Z Error":
            ws.send(JSON.stringify({ message: "This error results from the API failing to generate the Z file to be sent by Revmax. Try unplugging and then reinserting your device.", owner: "assistant" }));
            break;
        case "Failed to Read Tax Configuration":
            ws.send(JSON.stringify({ message: "This error results from the API failing to read the tax configurations currently set on the device. Contact Axis Solutions for resolution.", owner: "assistant" }));
            break;
        case "Transaction error: RevMax License Error":
            ws.send(JSON.stringify({ message: "This Occurs when the license has expired or has not been set for that device, Moreso at a time if you run 2 instances at the same time you are prone to get that error ie. using our Test Tool while your application is running.", owner: "assistant" }));
            break;
        case "Transaction error: Fiscal Day has exceeded 24 hours. Run a ZReport to close the current day":
            ws.send(JSON.stringify({ message: "If you have exceeded more than 24hrs since your last ZReport run you will receive the above error message.", owner: "assistant" }));
            break;
        case "Transaction error: Error getting Fiscal day status:":
            ws.send(JSON.stringify({ message: "This occurs if your device has failed to connect with ZIMRA server possibly due to network issues, corrupt certificates.", owner: "assistant" }));
            break;
        case "Transaction error: Fiscal day is currently closed, run Z Report to open Fiscal Day":
            ws.send(JSON.stringify({ message: "If you happen to do a transaction while fiscal day is currently closed you will get the above error message hence you need to run a zreport to Open the Day.", owner: "assistant" }));
            break;
        case "Transaction error: Duplicate invoice Number XXXXX":
            ws.send(JSON.stringify({ message: "It occurs on credit notes where the OriginalInvoiceNumber you have inserted in the parameter does not exist. Meaning there was no original Invoice with that InvoiceNumber which was done from the system.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Price: Unable to calculate Price":
            ws.send(JSON.stringify({ message: "Occurs when the data passed on price is not a recognized digits.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Price: Price cannot be empty":
            ws.send(JSON.stringify({ message: "The price field on line items cannot be null hence it's compulsory to pass it.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Price: Price cannot be 0 or invalid format":
            ws.send(JSON.stringify({ message: "To resolve this you have to enter a quantity which is greater than 0.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid ITEMCODE, item code cannot be greater than 8 characters":
            ws.send(JSON.stringify({ message: "The Zimra server is accepting a standard itemcode of only 8 Characters anything beyond that is not acceptable.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Quantity: Unable to calculate Quantity":
            ws.send(JSON.stringify({ message: "Occurs when the data passed on quantity is not a recognized digits.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Quantity: Quantity cannot be empty":
            ws.send(JSON.stringify({ message: "The quantity field on line items cannot be null hence it's compulsory to pass it.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Amount: Unable to calculate Amount":
            ws.send(JSON.stringify({ message: "Occurs when the data passed on amount is not a recognized digits.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Item Amount: Amount cannot be empty":
            ws.send(JSON.stringify({ message: "The amount field on line items cannot be null hence it's compulsory to pass it.", owner: "assistant" }));
            break;
        case "Transaction error: Missing Information– InvoiceTaxAmount":
            ws.send(JSON.stringify({ message: "Please ensure that the invoice tax amount is provided.", owner: "assistant" }));
            break;
        case "Transaction error: Missing Information– InvoiceAmount":
            ws.send(JSON.stringify({ message: "Please ensure that the invoice amount is provided.", owner: "assistant" }));
            break;
        case "Transaction error: Missing Information- InvoiceNumber":
            ws.send(JSON.stringify({ message: "Please ensure that the invoice number is provided.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid CurrenciesXML, check for incorrect/incomplete tags":
            ws.send(JSON.stringify({ message: "Please ensure that the currencies XML is correctly formatted.", owner: "assistant" }));
            break;
        case "Transaction error: Credit Note Currency does not match original invoice currency":
            ws.send(JSON.stringify({ message: "Please ensure that the currency of the credit note matches the original invoice currency.", owner: "assistant" }));
            break;
        case "Transaction error: Invoice Number does not exist":
            ws.send(JSON.stringify({ message: "Please ensure that the invoice number exists.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Customer VAT Number":
            ws.send(JSON.stringify({ message: "Please ensure that the customer VAT number is valid.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Customer TIN":
            ws.send(JSON.stringify({ message: "Please ensure that the customer TIN is valid.", owner: "assistant" }));
            break;
        case "Transaction error: Invalid Invoice VAT Amount- The calculated Invoice VAT Amount":
            ws.send(JSON.stringify({ message: "Please ensure that the invoice VAT amount is correctly calculated.", owner: "assistant" }));
            break;
        default:
            ws.send(JSON.stringify({ message: "Unknown error code.", owner: "assistant" }));
    }
   });

   ws.on("close", () => {
      console.log("Client disconnected");
      
   });
});

console.log(`WebSocket server listening on port: ${PORT}`);
