export const NotWhitelisted = () => {
  return (
    <div>
      <span>Uh oh, looks like you are not whitelisted.</span>
      <span>
        If you haven't filled out the Beta Access form, fill it out{" "}
        <a href="/beta-access" className="underline font-bold">
          here
        </a>{" "}
        and we will get back to you.
      </span>
    </div>
  );
};
