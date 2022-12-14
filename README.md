<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/hiboxco/hiboxscheduler">
  <img src="https://scheduler.hibox.co/Hibox-Scheduler-logo-white-word.svg" alt="Logo">
  </a>

  <h3 align="center">Hibox Scheduler</h3>

  <p align="center">
    The open-source Calendly alternative.
    <br />
    <a href="https://hiboxscheduler.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://hiboxscheduler.com">Website</a>
    ·
    <a href="https://github.com/hiboxco/hibox/issues">Issues</a>
  </p>
</p>

<p align="center">

</p>

<!-- ABOUT THE PROJECT -->

## About The Project

<img width="100%" alt="booking-screen" src="/apps/web/public/hibox-booking-video.gif">

# Scheduling infrastructure for absolutely everyone

The open source Calendly alternative. You are in charge
of your own data, workflow and appearance.

Calendly and other scheduling tools are awesome. It made our lives massively easier. We're using it for business meetings, seminars, yoga classes and even calls with our families. However, most tools are very limited in terms of control and customisations.

That's where Hibox Scheduler comes in. Self-hosted. White-label by design. API-driven and ready to be deployed on your own domain. Full control of your events and data.

<!-- ## Product of the Month: April

#### Support us on [Product Hunt](https://www.producthunt.com/posts/calendso?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-calendso)

<a href="https://www.producthunt.com/posts/calendso?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-calendso" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=291910&theme=light&period=monthly" alt="hiboxscheduler.com - The open source Calendly alternative | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> <a href="https://www.producthunt.com/posts/calendso?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-calendso" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291910&theme=light" alt="hiboxscheduler.com - The open source Calendly alternative | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> <a href="https://www.producthunt.com/stories/how-this-open-source-calendly-alternative-rocketed-to-product-of-the-day" target="_blank"><img src="https://hiboxscheduler.com/maker-grant.svg" alt="hiboxscheduler.com - The open source Calendly alternative | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> -->

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Prisma](https://prisma.io/)

<!-- ## Stay Up-to-Date

Hibox Scheduler officially launched as v.1.0 on 15th of September, however a lot of new features are coming. Watch **releases** of this repository to be notified for future updates:

![cal-star-github](https://user-images.githubusercontent.com/8019099/154853944-a9e3c999-3da3-4048-b149-b4f73893c6fb.gif) -->

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Hibox Scheduler.

- Node.js
- PostgreSQL
- Yarn _(recommended)_

> If you want to enable any of the available integrations, you may want to obtain additional credentials for each one. More details on this can be found below under the [integrations section](#integrations).

## Development

### Setup

1. Clone the repo

   ```sh
   git clone https://github.com/hiboxco/hiboxscheduler.git
   ```

1. Go to the project folder

   ```sh
   cd hiboxscheduler.com
   ```

1. Copy `apps/web/.env.example` to `apps/web/.env`

   ```sh
   cp apps/web/.env.example apps/web/.env
   cp packages/prisma/.env.example packages/prisma/.env
   ```

1. Install packages with yarn

   ```sh
   yarn
   ```

#### Quick start with `yarn dx`

> - **Requires Docker and Docker Compose to be installed**
> - Will start a local Postgres instance with a few test users - the credentials will be logged in the console

```sh
yarn dx
```

#### Development tip

> Add `NEXT_PUBLIC_DEBUG=1` anywhere in your `apps/web/.env` to get logging information for all the queries and mutations driven by **trpc**.

```sh
echo 'NEXT_PUBLIC_DEBUG=1' >> apps/web/.env
```

#### Manual setup

1. Configure environment variables in the .env file. Replace `<user>`, `<pass>`, `<db-host>`, `<db-port>` with their applicable values

   ```
   DATABASE_URL='postgresql://<user>:<pass>@<db-host>:<db-port>'
   ```

   <details>
   <summary>If you don't know how to configure the DATABASE_URL, then follow the steps here to create a quick DB using Heroku</summary>

   1. Create a free account with [Heroku](https://www.heroku.com/).

   2. Create a new app.
      <img width="306" alt="Create an App" src="https://user-images.githubusercontent.com/16905768/115322780-b3d58c00-a17e-11eb-8a52-b758fb0ea942.png">

   3. In your new app, go to `Overview` and next to `Installed add-ons`, click `Configure Add-ons`. We need this to set up our database.
      ![image](https://user-images.githubusercontent.com/16905768/115323232-a53ba480-a17f-11eb-98db-58e2f8c52426.png)

   4. Once you clicked on `Configure Add-ons`, click on `Find more add-ons` and search for `postgres`. One of the options will be `Heroku Postgres` - click on that option.
      ![image](https://user-images.githubusercontent.com/16905768/115323126-5beb5500-a17f-11eb-8030-7380310807a9.png)

   5. Once the pop-up appears, click `Submit Order Form` - plan name should be `Hobby Dev - Free`.
      <img width="512" alt="Submit Order Form" src="https://user-images.githubusercontent.com/16905768/115323265-b4baed80-a17f-11eb-99f0-d67f019aa6df.png">

   6. Once you completed the above steps, click on your newly created `Heroku Postgres` and go to its `Settings`.
      ![image](https://user-images.githubusercontent.com/16905768/115323367-e92ea980-a17f-11eb-9ff4-dec95f2ec349.png)

   7. In `Settings`, copy your URI to your hiboxscheduler.com .env file and replace the `postgresql://<user>:<pass>@<db-host>:<db-port>` with it.
      ![image](https://user-images.githubusercontent.com/16905768/115323556-4591c900-a180-11eb-9808-2f55d2aa3995.png)
      ![image](https://user-images.githubusercontent.com/16905768/115323697-7a9e1b80-a180-11eb-9f08-a742b1037f90.png)

   8. To view your DB, once you add new data in Prisma, you can use [Heroku Data Explorer](https://heroku-data-explorer.herokuapp.com/).
   </details>

1. Set a 32 character random string in your .env file for the `HIBOX_ENCRYPTION_KEY` (You can use a command like `openssl rand -base64 24` to generate one).
1. Set up the database using the Prisma schema (found in `apps/web/prisma/schema.prisma`)

   ```sh
   yarn workspace @calcom/prisma db-deploy
   ```

1. Run (in development mode)

   ```sh
   yarn dev
   ```

#### Setting up your first user

1. Open [Prisma Studio](https://www.prisma.io/studio) to look at or modify the database content:

   ```sh
   yarn db-studio
   ```

1. Click on the `User` model to add a new user record.
1. Fill out the fields `email`, `username`, `password`, and set `metadata` to empty `{}` (remembering to encrypt your password with [BCrypt](https://bcrypt-generator.com/)) and click `Save 1 Record` to create your first user.
   > New users are set on a `TRIAL` plan by default. You might want to adjust this behavior to your needs in the `apps/web/prisma/schema.prisma` file.
1. Open a browser to [http://localhost:3000](http://localhost:3000) and login with your just created, first user.

### E2E-Testing

```sh
# In first terminal. Must run on port 3000.
yarn dx
# In second terminal
yarn workspace @calcom/web test-e2e

# To open last HTML report run:
yarn workspace @calcom/web playwright-report
```

### Upgrading from earlier versions

1. Pull the current version:

   ```sh
   git pull
   ```

2. Apply database migrations by running <b>one of</b> the following commands:

   In a development environment, run:

   ```sh
   yarn workspace @calcom/prisma db-migrate
   ```

   (this can clear your development database in some cases)

   In a production environment, run:

   ```sh
   yarn workspace @calcom/prisma db-deploy
   ```

3. Check the `.env.example` and compare it to your current `.env` file. In case there are any fields not present
   in your current `.env`, add them there.

   For the current version, especially check if the variable `BASE_URL` is present and properly set in your environment, for example:

   ```
   BASE_URL='https://yourdomain.com'
   ```

4. Start the server. In a development environment, just do:

   ```sh
   yarn dev
   ```

   For a production build, run for example:

   ```sh
   yarn build
   yarn start
   ```

5. Enjoy the new version.
<!-- DEPLOYMENT -->

## Deployment

### Heroku

<a href="https://heroku.com/deploy?template=https://github.com/hiboxco/hiboxscheduler">
  <img width="185px" height="auto" src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

### Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Fcalendso%2Fcalendso&plugins=postgresql&envs=GOOGLE_API_CREDENTIALS%2CBASE_URL%2CNEXTAUTH_URL%2CPORT&BASE_URLDefault=http%3A%2F%2Flocalhost%3A3000&NEXTAUTH_URLDefault=http%3A%2F%2Flocalhost%3A3000&PORTDefault=3000)

  Detailed instructions on deployment are on <a href="https://github.com/calcom/cal.com">cal.com</a> repository. 


### Good First Issues

We have a list of [good first issues](https://github.com/hiboxco/hiboxscheduler/labels/✅%20good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with our contribution process.

## Integrations

### Obtaining the Google API Credentials

1. Open [Google API Console](https://console.cloud.google.com/apis/dashboard). If you don't have a project in your Google Cloud subscription, you'll need to create one before proceeding further. Under Dashboard pane, select Enable APIS and Services.
2. In the search box, type calendar and select the Google Calendar API search result.
3. Enable the selected API.
4. Next, go to the [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent) from the side pane. Select the app type (Internal or External) and enter the basic app details on the first page.
5. In the second page on Scopes, select Add or Remove Scopes. Search for Calendar.event and select the scope with scope value `.../auth/calendar.events`, `.../auth/calendar.readonly` and select Update.
6. In the third page (Test Users), add the Google account(s) you'll using. Make sure the details are correct on the last page of the wizard and your consent screen will be configured.
7. Now select [Credentials](https://console.cloud.google.com/apis/credentials) from the side pane and then select Create Credentials. Select the OAuth Client ID option.
8. Select Web Application as the Application Type.
9. Under Authorized redirect URI's, select Add URI and then add the URI `<hiboxscheduler.com URL>/api/integrations/googlecalendar/callback` replacing hiboxscheduler.com URL with the URI at which your application runs.
10. The key will be created and you will be redirected back to the Credentials page. Select the newly generated client ID under OAuth 2.0 Client IDs.
11. Select Download JSON. Copy the contents of this file and paste the entire JSON string in the .env file as the value for GOOGLE_API_CREDENTIALS key.

### Obtaining Microsoft Graph Client ID and Secret

1. Open [Azure App Registration](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) and select New registration
2. Name your application
3. Set **Who can use this application or access this API?** to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**
4. Set the **Web** redirect URI to `<hiboxscheduler.com URL>/api/integrations/office365calendar/callback` replacing hiboxscheduler.com URL with the URI at which your application runs.
5. Use **Application (client) ID** as the **MS_GRAPH_CLIENT_ID** attribute value in .env
6. Click **Certificates & secrets** create a new client secret and use the value as the **MS_GRAPH_CLIENT_SECRET** attribute

### Obtaining Zoom Client ID and Secret

1. Open [Zoom Marketplace](https://marketplace.zoom.us/) and sign in with your Zoom account.
2. On the upper right, click "Develop" => "Build App".
3. On "OAuth", select "Create".
4. Name your App.
5. Choose "User-managed app" as the app type.
6. De-select the option to publish the app on the Zoom App Marketplace.
7. Click "Create".
8. Now copy the Client ID and Client Secret to your .env file into the `ZOOM_CLIENT_ID` and `ZOOM_CLIENT_SECRET` fields.
9. Set the Redirect URL for OAuth `<hiboxscheduler.com URL>/api/integrations/zoomvideo/callback` replacing hiboxscheduler.com URL with the URI at which your application runs.
10. Also add the redirect URL given above as a allow list URL and enable "Subdomain check". Make sure, it says "saved" below the form.
11. You don't need to provide basic information about your app. Instead click at "Scopes" and then at "+ Add Scopes". On the left, click the category "Meeting" and check the scope `meeting:write`.
12. Click "Done".
13. You're good to go. Now you can easily add your Zoom integration in the hiboxscheduler.com settings.

### Obtaining Daily API Credentials

1. Open [Daily](https://www.daily.co/) and sign into your account.
2. From within your dashboard, go to the [developers](https://dashboard.daily.co/developers) tab.
3. Copy your API key.
4. Now paste the API key to your .env file into the `DAILY_API_KEY` field in your .env file.
5. If you have the [Daily Scale Plan](https://www.daily.co/pricing) set the `DAILY_SCALE_PLAN` variable to `true` in order to use features like video recording.

<!-- LICENSE -->

## License

Distributed under the AGPLv3 License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

Special thanks to this amazing project which help power Hibox Scheduler:

Hibox Scheduler is an open source project which uses <a href="https://github.com/calcom/cal.com">cal.co</a> under AGPLv3 License.
You an acquire a commercial license here: 
  <a href="https://console.cal.com/signup">console.cal.com</a> and support plan here: <a href="https://cal.com/support">https://cal.com/support</a>

