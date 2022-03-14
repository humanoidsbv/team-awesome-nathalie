# Team awesome

Team awesome is a time entry application. An user can add time entries and team members to the application. The time entries are stored in the timesheets on the first page of the application. The time entries are displayed by date and gives the user the information about the client, work hours and duration per day.

The Team Members page displays all the team members of the company, their role, client and starting date.

## Technologies

---

- Node.js
- Next.js
- React and JSX
- JSON
- Vercel
- Storybook

## Installation

---

Install the lastest version of Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Node Package Manager (NPM)

```bash
brew install node
```

Run this command:

```bash
npm install
```

To run the application use this command:

```bash
npm run build
npm run start
```

## Usage

---

To add a new time entry click on the button 'New time entry'. Enter the name of the client, work activity, date and time. Click on the 'Add time entry' button to send this to the server. Your input will be visible on the Timesheets page.

To filter clients use the filter drop-down menu at the top of the timesheets.

To add new team members, this is the same workflow as time entries. Go to the team members page. Click on the 'New Humanoid' button. Enter first name, last name, email address, label, client, role and starting date. Click on the 'Add Humanoid' button to add a new member.

To sort team members by client, first name, last name, role and starting date use the sort team members drop down at te top of the team members.

## Storybook

---

To start storybook use the following command

```bash
npm run storybook
```
