# 🔍 CHALLENGE 2: API PI

## Problem

**In this challenge, you'll be working with APIs and user input to create a dynamic form. Your task is to clone the provided GitHub repository and implement a form that interacts with any API of your choice. Here’s a breakdown of steps to complete this challenge:**

1. **Clone the Repository:**
   Start by cloning the GitHub repository from the [`api-playground`](https://github.com/umn-adc/api-playground) repository. This repository already contains some helpful libraries for completing the challenge.

2. **Choose an API:**
   Select an API; This could be anything from a weather API to a public data API—whatever sparks your interest! The only requirement is that the API must accept at least **query or ID parameters** or a **request body**.

3. **Create a Form Page:**

   - Implement a form in a new page in `routes/` that allows users to input the necessary parameters for the API request.
   - Upon submission, your form should send requests to the chosen API based on user input and display the results on that same page.
     > ### 💡 **Hint**!
     >
     > You can use the provided `Input`, `Button`, and `ResponseViewer` components if you'd like! It might make your life a tiny bit easier.

4. **Add to the Router:**
   Integrate your new form page into the existing router structure of the application (look at `routes/router.tsx`). You should see a link to your page in `Home` after doing this.

5. **Make a Pull Request:**
   Once you've implemented the above steps, push your changes to a new branch and create a pull request for review.

## Scoring

### 100 points

### Submission deadline

`Tue Nov 7 2024 23:59:59 GMT-0600 (Central Standard Time)`

### Bonus

**⏱️ Submission Time**

> **`[+20 points]`** ≤ **1** day \
> **`[+15 points]`** ≤ **3** days \
> **`[+10 points]`** ≤ **5** days \
> **`[-1 point]`** ∙ _(**your leaderboard position** - 1)_

**✨ _Extra Points_ ✨**

- Using `async/await` for API requests **`(+20 points)`**
- Configuring an axios object with a `baseURL` and using the `config` parameter in your request **`(+15 points)`**
- Custom page design to enhance user experience **`(+10 points)`**

### Example API choices

- [OpenWeatherMap API](https://openweathermap.org/api)
- [The Cat API](https://thecatapi.com/)
- [PokeAPI](https://pokeapi.co/)

## Submission

### GitHub Pull Request

Submit your pull request to the main branch of the [`api-playground`](https://github.com/umn-adc/api-playground) repository. Make sure to include a descriptive title and comments explaining your implementation.

**_Good luck, and happy coding!_**
