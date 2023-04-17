# App component:
- create a state variable to hold the full expression that is being calculated
- create a state variable to hold just the number (as a string) that is being typed into the calculator

# Button component
- this component will house all the buttons
## nNumberpad subcomponent 
- #0-9 and "." as buttons in the numberpad
- this will update the state variables displaying the number and full expression
- if a zero is typed as the first number, replace it in both state variables once a non-zero number is clicked

## Operations subcomponent
- containing "+" "-" "/" & "*" as clickable buttons
- this will update the state variables displaying the full expression
- will also clear the number from the state variable of just the number, and replace it with the operator being used
- if multiple operators are being used without numbers between, just the last operator should show up in the display, so it updates the state variables each time a new operator is clicked and replaces the old one
## EqualSign subcomponent
- the equalsign should update the full expression state variable to show the full expression + the equalsign + the answer to the calculator expression
- for the number state variable it will change to whatever the answer to the expression is
- if an operator is clicked after the equalsign, the full expression state variable will change to whatever is after the "=" and continue on with another expression
- if a numberpad button is clicked, the state variables will be cleared and a new expression will start
## AC (AllClear) subcomponent
- this button will simply clear the state variables for the display.

# Display component
- this will house the display for the complete expression and the current number being entered