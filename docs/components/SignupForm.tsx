import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { keccak256, toBytes } from "viem";
// import { Callout } from "vocs/components";
import { useAccount, useSignTypedData } from "wagmi";
import { Input } from "./Input";

const hashFormData = (formData: Record<string, any>) => {
  return keccak256(toBytes(JSON.stringify(formData)));
};

const MRU_API = "https://api.beta1.stf.xyz";

const registrationSchema = [
  {
    name: "Name",
    key: "name",
    type: "string",
  },
  {
    name: "Wallet",
    key: "wallet",
    type: "address",
  },
  {
    name: "Discord Username",
    key: "discord",
    type: "string",
  },
  {
    name: "GitHub Username",
    key: "github",
    type: "string",
  },
  {
    name: "NPM Username",
    key: "npm",
    type: "string",
  },
  {
    name: "What vertical are you in?",
    key: "vertical",
    type: "string",
  },
  {
    name: "What do you plan to build?",
    key: "planToBuild",
    type: "string",
  },
  {
    name: "How does Stackr fit into your project?",
    key: "stackrFit",
    type: "string",
  },
  {
    name: "What is your aspirational idea?",
    key: "aspirationalIdea",
    type: "string",
  },
];

export const SignupForm = () => {
  const { signTypedDataAsync } = useSignTypedData();
  const { address } = useAccount();
  const { register, handleSubmit, reset, watch, formState } = useForm<any>();
  const watcher = watch();
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

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

    if (res.status === 201) {
      setHasApplied(true);
      reset();
    }
  };

  const renderForm = () => {
    const { isSubmitting, errors, isValid } = formState;
    const isDisabled = isSubmitting || !isValid || isAnyFieldEmpty;

    useEffect(() => {
      const anyFieldEmpty = Object.values(watcher).some(
        (field) => field === ""
      );
      setIsAnyFieldEmpty(anyFieldEmpty);
    }, [watcher, errors]);

    return (
      <form
        className="flex flex-col gap-6 w-full overflow-scroll"
        onSubmit={handleSubmit(onSubmit)}
      >
        {registrationSchema.map(({ key, type, name }) => (
          <Input
            key={key}
            formKey={key}
            register={register}
            placeholder={type}
            defaultValue={key === "wallet" ? address : ""}
            label={name}
            paramType={type}
          />
        ))}

        <div className="bg-teal-connect opacity-25 w-[180px] h-6 rounded-lg" />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isDisabled}
            className="primary bg-teal-connect w-44 h-9 px-4 rounded-lg absolute text-black font-jetbrains font-bold"
          >
            {isSubmitting ? "Applying..." : "Sign & Apply"}
          </button>
        </div>
        <div className="bg-teal-connect opacity-25 w-[180px] h-6 rounded-lg" />
      </form>
    );
  };

  return (
    <div className="font-geist">
      {hasApplied ? (
        // <Callout className="text-center" type="info">
        <>
          Thanks for applying, we'll review your application and "drop" access
          in next few days!
        </>
      ) : (
        // </Callout>
        renderForm()
      )}
    </div>
  );
};
