/**
 * Generative AI Service Inference API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service inference API to access your custom model endpoints, or to try the out-of-the-box models to [generate text](#/en/generative-ai-inference/latest/GenerateTextResult/GenerateText), [summarize](#/en/generative-ai-inference/latest/SummarizeTextResult/SummarizeText), and [create text embeddings](#/en/generative-ai-inference/latest/EmbedTextResult/EmbedText).

To use a Generative AI custom model for inference, you must first create an endpoint for that model. Use the [Generative AI service management API](/#/en/generative-ai/latest/) to [create a custom model](#/en/generative-ai/latest/Model/) by fine-tuning an out-of-the-box model, or a previous version of a custom model, using your own data. Fine-tune the custom model on a  [fine-tuning dedicated AI cluster](#/en/generative-ai/latest/DedicatedAiCluster/). Then, create a [hosting dedicated AI cluster](#/en/generative-ai/latest/DedicatedAiCluster/) with an [endpoint](#/en/generative-ai/latest/Endpoint/) to host your custom model. For resource management in the Generative AI service, use the [Generative AI service management API](/#/en/generative-ai/latest/).

To learn more about the service, see the [Generative AI documentation](/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for the chat request for Cohere models.
 */
export interface CohereChatRequest extends model.BaseChatRequest {
  /**
   * Text input for the model to respond to.
   */
  "message": string;
  /**
   * A list of previous messages between the user and the model, meant to give the model conversational context for responding to the user's message.
   */
  "chatHistory"?: Array<model.CohereMessage>;
  /**
   * list of relevant documents that the model can cite to generate a more accurate reply.
   * Some suggested keys are \"text\", \"author\", and \"date\". For better generation quality, it is
   * recommended to keep the total word count of the strings in the dictionary to under 300
   * words.
   *
   */
  "documents"?: Array<any>;
  /**
   * When true, the response will only contain a list of generated search queries, but no search will take place, and no reply from the model to the user's message will be generated.
   */
  "isSearchQueriesOnly"?: boolean;
  /**
   * When specified, the default Cohere preamble will be replaced with the provided one. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style. Default preambles vary for different models.
   */
  "preambleOverride"?: string;
  /**
   * Whether to stream back partial progress. If set, tokens are sent as data-only server-sent events as they become available.
   */
  "isStream"?: boolean;
  /**
   * The maximum number of tokens to predict for each response. Includes input plus output tokens. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTokens"?: number;
  /**
   * A number that sets the randomness of the generated output. A lower temperature means a less random generations.
   * Use lower numbers for tasks with a correct answer such as question answering or summarizing. High temperatures can generate hallucinations or factually incorrect information. Start with temperatures lower than 1.0 and increase the temperature for more creative outputs, as you regenerate the prompts to refine the outputs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "temperature"?: number;
  /**
    * An integer that sets up the model to use only the top k most likely tokens in the generated output. A higher k introduces more randomness into the output making the output text sound more natural. Default value is 0 which disables this method and considers all tokens. To set a number for the likely tokens, choose an integer between 1 and 500.
* <p>
If also using top p, then the model considers only the top tokens whose probabilities add up to p percent and ignores the rest of the k tokens. For example, if k is 20, but the probabilities of the top 10 add up to .75, then only the top 10 tokens are chosen.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "topK"?: number;
  /**
    * If set to a probability 0.0 < p < 1.0, it ensures that only the most likely tokens, with total probability mass of p, are considered for generation at each step.
* <p>
To eliminate tokens with low likelihood, assign p a minimum percentage for the next token's likelihood. For example, when p is set to 0.75, the model eliminates the bottom 25 percent for the next token. Set to 1.0 to consider all tokens and set to 0 to disable. If both k and p are enabled, p acts after k.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "topP"?: number;
  /**
   * To reduce repetitiveness of generated tokens, this number penalizes new tokens based on their frequency in the generated text so far. Greater numbers encourage the model to use new tokens, while lower numbers encourage the model to repeat the tokens. Set to 0 to disable.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "frequencyPenalty"?: number;
  /**
    * To reduce repetitiveness of generated tokens, this number penalizes new tokens based on whether they've appeared in the generated text so far. Greater numbers encourage the model to use new tokens, while lower numbers encourage the model to repeat the tokens.
* <p>
Similar to frequency penalty, a penalty is applied to previously present tokens, except that this penalty is applied equally to all tokens that have already appeared, regardless of how many times they've appeared. Set to 0 to disable.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "presencePenalty"?: number;

  "apiFormat": string;
}

export namespace CohereChatRequest {
  export function getJsonObj(obj: CohereChatRequest, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseChatRequest.getJsonObj(obj) as CohereChatRequest)),
      ...{
        "chatHistory": obj.chatHistory
          ? obj.chatHistory.map(item => {
              return model.CohereMessage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const apiFormat = "COHERE";
  export function getDeserializedJsonObj(
    obj: CohereChatRequest,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseChatRequest.getDeserializedJsonObj(obj) as CohereChatRequest)),
      ...{
        "chatHistory": obj.chatHistory
          ? obj.chatHistory.map(item => {
              return model.CohereMessage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
