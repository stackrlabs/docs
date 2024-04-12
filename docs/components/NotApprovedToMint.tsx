export const NotApprovedToMint = () => {
  return (
    <div>
      <span>Uh oh, looks like you are not approved to mint yet.</span>
      <br />
      <span>
        If you haven't filled out the Beta Access form, fill it out{" "}
        <a href="/beta-access" className="underline font-bold">
          here
        </a>{" "}
        and we will get back to you. 🫡
      </span>
    </div>
  );
};
