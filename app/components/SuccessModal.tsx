"use client";

type SuccessModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  buttonText?: string;
  onClose: () => void;
};

export default function SuccessModal({
  isOpen,
  title,
  message,
  buttonText = "Close",
  onClose,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl">
        <div className="flex justify-center">
          <img
            src="/lumo.png"
            alt="Lumo"
            className="w-full max-w-[8rem] object-contain drop-shadow-lg"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Lumo Confirmed
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{message}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-white transition-colors hover:bg-blue-700"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}