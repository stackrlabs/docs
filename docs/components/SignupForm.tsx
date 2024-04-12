import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { keccak256, toBytes } from "viem";
import { sepolia } from "viem/chains";
import { useAccount, useSignTypedData } from "wagmi";
import { ConnectWallet } from "./ConnectWallet";
import { Field } from "./Field";

const hashFormData = (formData: Record<string, any>) => {
  return keccak256(toBytes(JSON.stringify(formData)));
};

const MRU_API = "https://api.beta1-form.stf.xyz";

const registrationSchema = [
  {
    name: "Name",
    key: "name",
    type: "string",
    placeholder: "Satoshi Buterin",
  },
  {
    name: "Wallet Address",
    key: "wallet",
    type: "address",
    isDisabled: true,
  },
  {
    name: "Discord",
    key: "discord",
    type: "string",
    placeholder: "satoshi#1234",
  },
  {
    name: "GitHub Username",
    key: "github",
    type: "string",
    placeholder: "microZk",
  },
  {
    name: "NPM Username",
    key: "npm",
    type: "string",
    placeholder: "microZk",
  },
  {
    name: "What vertical are you in?",
    key: "vertical",
    type: "string",
    fieldType: "select",
    placeholder: "Select a vertical",
    options: [
      "DeFi",
      "Consumer",
      "Auth",
      "AI/ML",
      "Privacy",
      "Intents",
      "Reputation",
      "Identity",
      "Other",
    ],
  },
  {
    name: "What do you plan to build with the Stackr SDK?",
    key: "planToBuild",
    type: "string",
    fieldType: "textarea",
    placeholder: "A decentralized Twitter",
  },
  {
    name: "How does Stackr fit into your architectrue?",
    key: "stackrFit",
    type: "string",
    fieldType: "textarea",
    placeholder: "I plan to use Stackr for user authentication",
  },
  {
    name: "What is the most aspirational thing you want to build in Web3?",
    key: "aspirationalIdea",
    type: "string",
    fieldType: "textarea",
    placeholder: "A decentralized internet",
  },
];

const SuccessBox = () => (
  <div
    id="on-submit"
    className="font-geist rounded-lg bg-emerald-200 text-center w-full h-full p-4"
  >
    <p className="text-emerald-800 font-bold">
      Thanks for applying to the Stackr Beta!
      <br />
      We'll "drop" the invite in your wallets soon 🖖🏻
      <br />
      <br />
      You can track your access at{" "}
      <a className="underline" target="_blank" href={MRU_API}>
        MRU API
      </a>
    </p>
  </div>
);

export const SignupForm = () => {
  const { signTypedDataAsync } = useSignTypedData();
  const { address, isConnected, chainId } = useAccount();
  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onChange",
    values: {
      wallet: address,
    },
  });
  const hasSignedUp = localStorage.getItem("hasSignedUp");
  const watcher = watch();
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(false);

  const onSubmit = async (details: any) => {
    const hash = hashFormData(details);

    const inputs = {
      hash,
    };

    const schemaData = await fetch(`${MRU_API}/schema`);
    const { domain, types } = await schemaData.json();
    const signature = await signTypedDataAsync({
      domain,
      types: types,
      primaryType: Object.keys(types)[0],
      message: inputs,
    });

    const payload = { signature, msgSender: address, inputs, details };

    const res = await fetch(`${MRU_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.status !== 201) {
      const json = await res.json();
      toast.error(`Failed to submit application.\nError: ${json.error}`);
      throw new Error("Failed to submit application 😭");
    }
    localStorage.setItem("hasSignedUp", "true");
    toast.success("Application submitted successfully! 🚀");
  };

  const renderForm = () => {
    const { isSubmitting, errors, isValid, isSubmitSuccessful } = formState;

    const isDisabled = isSubmitting || !isValid || isAnyFieldEmpty;

    useEffect(() => {
      const anyFieldEmpty = Object.values(watcher).some(
        (field) => !field || field.length === 0
      );
      setIsAnyFieldEmpty(anyFieldEmpty);
    }, [watcher, errors]);

    if (!isConnected || chainId !== sepolia.id) {
      return <ConnectWallet />;
    }

    if (isSubmitSuccessful || hasSignedUp) {
      document.getElementById("on-submit")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return <SuccessBox />;
    }

    return (
      <form
        className="font-geist flex flex-col gap-6 w-full overflow-scroll"
        onSubmit={handleSubmit(onSubmit)}
      >
        {registrationSchema.map(
          (
            { key, type, name, fieldType, isDisabled, placeholder, options },
            idx
          ) => (
            <Field
              key={`${key}-${idx}`}
              formKey={key}
              register={register}
              fieldType={fieldType as any}
              isDisabled={isDisabled}
              placeholder={placeholder || type}
              defaultValue={key === "wallet" ? address : ""}
              options={options}
              label={name}
              paramType={type}
            />
          )
        )}
        <div className="overflow-x-auto p-4 rounded-lg bg-slate-700 text-white ">
          Form Data 👇
          <br />
          <pre className="font-jetbrains">
            {JSON.stringify(watcher, null, 2)}
          </pre>
          <hr className="my-4" />
          Hash 👇
          <br />
          <code className="font-jetbrains">{hashFormData(watcher)}</code>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            type="submit"
            disabled={isDisabled}
            className={`primary bg-teal-connect w-44 h-9 px-4 rounded-lg absolute text-black font-jetbrains font-bold ${
              isDisabled ? "disabled:opacity-40 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Applying..." : "Sign & Apply"}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "#62ededfb",
              color: "#051A21",
              fontWeight: "bold",
              minWidth: "360px",
              backdropFilter: "blur(10px)",
            },
          },
        }}
      />
      {renderForm()}
    </div>
  );
};
