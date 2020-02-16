'use strict';

module.exports = {
  userName:"Adam@email.com",
  tabs: [
    {
      displayName: "Awesome Tab #1",
      theme: "{#tabID {background-color: 'sameastabthemestringifiedcss'}}",
      type: "multi",
      pasties: [
        {
          displayName: "title for the pastie, can be null",
          theme: "{#pastyID {background-color: 'sameastabthemestringifiedcss'}}",
          type: "string",
          content: "This is the text the user will see and copy into their clipboard",
        }
      ]
    }
  ]
}