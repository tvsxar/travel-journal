function AuthForm({ isLogin, userError, formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}
    className="flex flex-col justify-center">

      {/* if error */}
      {userError && (
        <p className="text-red-500 text-sm mb-4 text-center">
          {userError}
        </p>
      )}

      {!isLogin && (
        <input
          type="text"
          name='username'
          value={formData.username}
          className="w-full text-sm bg-cyan-600/5 rounded-xl px-5 py-3 mb-4 outline-none"
          placeholder="Username"
          onChange={handleChange}
        />
      )}
      <input
        type="email"
        name='email'
        value={formData.email}
        className="w-full text-sm bg-cyan-600/5 rounded-xl px-5 py-3 mb-4 outline-none"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name='password'
        value={formData.password}
        className="w-full text-sm bg-cyan-600/5 rounded-xl px-5 py-3 mb-4 outline-none"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit"
        className="w-full text-sm font-medium shadow-lg shadow-cyan-200/50 h-12
            bg-cyan-500 text-white p-2 rounded-full my-2 mt-4 cursor-pointer hover:bg-cyan-100 hover:text-cyan-500"
      >
        {isLogin ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default AuthForm;
