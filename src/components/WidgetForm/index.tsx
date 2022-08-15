import { useState } from "react";
import BugImageUrl from "../../assets/bug.svg";
import IdeaImageUrl from "../../assets/idea.svg";
import ThoughtImageUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImageUrl,
      alt: "Imagem de um inseto"
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImageUrl,
      alt: "Imagem de uma lâmpada"
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: ThoughtImageUrl,
      alt: "Imagem de um balão de pensamento"
    },
  },
};

// type created to choose only the keys of FeedbackTypes, preventing to emit different data
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback}/>
      ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  );
}
