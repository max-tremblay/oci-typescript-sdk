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
 * Details for the chat request.
 */
export interface GenericChatRequest extends model.BaseChatRequest {
  /**
   * The series of messages associated with this chat completion request. It should include previous messages in the conversation. Each message has a role and content.
   */
  "messages"?: Array<model.Message>;
  /**
   * Whether to stream back partial progress. If set, tokens are sent as data-only server-sent events as they become available.
   */
  "isStream"?: boolean;
  /**
   * The number of of generated texts that will be returned. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numGenerations"?: number;
  /**
   * Whether or not to return the user prompt in the response. Applies only to non-stream results.
   */
  "isEcho"?: boolean;
  /**
    * An integer that sets up the model to use only the top k most likely tokens in the generated output. A higher k introduces more randomness into the output making the output text sound more natural. Default value is -1 which means to consider all tokens. Setting to 0 disables this method and considers all tokens.
* <p>
If also using top p, then the model considers only the top tokens whose probabilities add up to p percent and ignores the rest of the k tokens. For example, if k is 20, but the probabilities of the top 10 add up to .75, then only the top 10 tokens are chosen.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "topK"?: number;
  /**
    * If set to a probability 0.0 < p < 1.0, it ensures that only the most likely tokens, with total probability mass of p, are considered for generation at each step.
* <p>
To eliminate tokens with low likelihood, assign p a minimum percentage for the next token's likelihood. For example, when p is set to 0.75, the model eliminates the bottom 25 percent for the next token. Set to 1 to consider all tokens and set to 0 to disable. If both k and p are enabled, p acts after k.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "topP"?: number;
  /**
    * A number that sets the randomness of the generated output. A lower temperature means a less random generations.
* <p>
Use lower numbers for tasks with a correct answer such as question answering or summarizing. High temperatures can generate hallucinations or factually incorrect information. Start with temperatures lower than 1.0 and increase the temperature for more creative outputs, as you regenerate the prompts to refine the outputs.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "temperature"?: number;
  /**
   * To reduce repetitiveness of generated tokens, this number penalizes new tokens based on their frequency in the generated text so far. Values > 0 encourage the model to use new tokens and values < 0 encourage the model to repeat tokens. Set to 0 to disable. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "frequencyPenalty"?: number;
  /**
    * To reduce repetitiveness of generated tokens, this number penalizes new tokens based on whether they've appeared in the generated text so far. Values > 0 encourage the model to use new tokens and values < 0 encourage the model to repeat tokens.
* <p>
Similar to frequency penalty, a penalty is applied to previously present tokens, except that this penalty is applied equally to all tokens that have already appeared, regardless of how many times they've appeared. Set to 0 to disable.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "presencePenalty"?: number;
  /**
   * List of strings that stop the generation if they are generated for the response text. The returned output will not contain the stop strings.
   */
  "stop"?: Array<string>;
  /**
    * Includes the logarithmic probabilities for the most likely output tokens and the chosen tokens.
* <p>
For example, if the log probability is 5, the API returns a list of the 5 most likely tokens. The API returns the log probability of the sampled token, so there might be up to logprobs+1 elements in the response.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "logProbs"?: number;
  /**
   * The maximum number of tokens that can be generated per output sequence. The token count of your prompt plus max_tokens cannot exceed the model's context length. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTokens"?: number;
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   */
  "logitBias"?: any;

  "apiFormat": string;
}

export namespace GenericChatRequest {
  export function getJsonObj(obj: GenericChatRequest, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseChatRequest.getJsonObj(obj) as GenericChatRequest)),
      ...{
        "messages": obj.messages
          ? obj.messages.map(item => {
              return model.Message.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const apiFormat = "GENERIC";
  export function getDeserializedJsonObj(
    obj: GenericChatRequest,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseChatRequest.getDeserializedJsonObj(obj) as GenericChatRequest)),
      ...{
        "messages": obj.messages
          ? obj.messages.map(item => {
              return model.Message.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
