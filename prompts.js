const prompts = [
  {
    "title": "Jak and A letter is burned",
    "text": "Jak approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to reveal what Jak has been hiding."
  },
  {
    "title": "Flanagan and Cornelia refuses to speak",
    "text": "Flanagan approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Cornelia and Ernest loses his temper",
    "text": "Cornelia approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Cornelia and Someone you trust acts strangely",
    "text": "Cornelia approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Flanagan and Ernest loses his temper",
    "text": "Flanagan approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Flanagan and A story in the town square changes each day",
    "text": "Flanagan approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Flanagan and Someone claims to have seen land",
    "text": "Flanagan approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to reveal what Flanagan has been hiding."
  },
  {
    "title": "Flanagan and A map is altered",
    "text": "Flanagan approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Anna and You hear someone crying below deck",
    "text": "Anna approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Warn others that Anna might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Cornelia and A child vanishes",
    "text": "Cornelia approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Silence Cornelia and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Ernest and Jak sketches something violent",
    "text": "Ernest approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Confront Ernest publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Elmer and A map is altered",
    "text": "Elmer approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Anna and You hear someone crying below deck",
    "text": "Anna approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Warn others that Anna might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Cornelia and A classroom is found ransacked",
    "text": "Cornelia approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Silence Cornelia and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Elmer and Someone you trust acts strangely",
    "text": "Elmer approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and A supply stash goes missing",
    "text": "Cornelia approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Ernest and Someone posts an anonymous message",
    "text": "Ernest approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Confront Ernest publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Elmer and A supply stash goes missing",
    "text": "Elmer approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Cornelia and A story in the town square changes each day",
    "text": "Cornelia approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Anna and Someone you trust acts strangely",
    "text": "Anna approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Arthur and A child vanishes",
    "text": "Arthur approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Warn others that Arthur might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Jak and The fog reveals a strange light",
    "text": "Jak approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Flanagan and Ernest loses his temper",
    "text": "Flanagan approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Jak and Raul goes silent",
    "text": "Jak approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Flanagan and Ernest loses his temper",
    "text": "Flanagan approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Arthur and A supply stash goes missing",
    "text": "Arthur approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Flanagan and Cornelia refuses to speak",
    "text": "Flanagan approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Cornelia and The fog reveals a strange light",
    "text": "Cornelia approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Cornelia and Someone posts an anonymous message",
    "text": "Cornelia approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Flanagan and Cornelia refuses to speak",
    "text": "Flanagan approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Arthur and Someone claims to have seen land",
    "text": "Arthur approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Ernest and A door is sealed shut",
    "text": "Ernest approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Warn others that Ernest might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Flanagan and You hear someone crying below deck",
    "text": "Flanagan approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Silence Flanagan and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Raul and A door is sealed shut",
    "text": "Raul approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to reveal what Raul has been hiding."
  },
  {
    "title": "Jak and A classroom is found ransacked",
    "text": "Jak approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Ernest and Someone you trust acts strangely",
    "text": "Ernest approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Silence Ernest and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Anna and Cornelia refuses to speak",
    "text": "Anna approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Arthur and Someone claims to have seen land",
    "text": "Arthur approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Flanagan and A supply stash goes missing",
    "text": "Flanagan approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Jak and A classroom is found ransacked",
    "text": "Jak approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Raul and A door is sealed shut",
    "text": "Raul approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Raul and Someone you trust acts strangely",
    "text": "Raul approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Anna and A supply stash goes missing",
    "text": "Anna approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Anna and Someone claims to have seen land",
    "text": "Anna approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Warn others that Anna might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to reveal what Anna has been hiding."
  },
  {
    "title": "Anna and Jak sketches something violent",
    "text": "Anna approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Flanagan and A patrol returns early",
    "text": "Flanagan approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Anna and Jak sketches something violent",
    "text": "Anna approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Elmer and A map is altered",
    "text": "Elmer approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Confront Elmer publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Jak and A letter is burned",
    "text": "Jak approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Raul and A letter is burned",
    "text": "Raul approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to reveal what Raul has been hiding."
  },
  {
    "title": "Anna and A supply stash goes missing",
    "text": "Anna approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Jak and A map is altered",
    "text": "Jak approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Arthur and A door is sealed shut",
    "text": "Arthur approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Raul and A warning bell rings",
    "text": "Raul approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Confront Raul publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to reveal what Raul has been hiding."
  },
  {
    "title": "Cornelia and Raul goes silent",
    "text": "Cornelia approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Raul and Raul goes silent",
    "text": "Raul approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Raul and A classroom is found ransacked",
    "text": "Raul approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Jak and You hear someone crying below deck",
    "text": "Jak approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Jak and A letter is burned",
    "text": "Jak approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Arthur and The fog reveals a strange light",
    "text": "Arthur approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Jak and Someone you trust acts strangely",
    "text": "Jak approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Arthur and Ernest loses his temper",
    "text": "Arthur approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Warn others that Arthur might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Arthur and A patrol returns early",
    "text": "Arthur approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Flanagan and The fog reveals a strange light",
    "text": "Flanagan approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and A supply stash goes missing",
    "text": "Cornelia approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Arthur and A map is altered",
    "text": "Arthur approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Confront Arthur publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Ernest and A map is altered",
    "text": "Ernest approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Arthur and Ernest loses his temper",
    "text": "Arthur approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Warn others that Arthur might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and Cornelia refuses to speak",
    "text": "Cornelia approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Silence Cornelia and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Raul and Someone you trust acts strangely",
    "text": "Raul approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Warn others that Raul might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Arthur and Someone claims to have seen land",
    "text": "Arthur approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Warn others that Arthur might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Anna and A story in the town square changes each day",
    "text": "Anna approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Flanagan and A door is sealed shut",
    "text": "Flanagan approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Silence Flanagan and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Anna and Cornelia refuses to speak",
    "text": "Anna approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Raul and Someone posts an anonymous message",
    "text": "Raul approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Jak and A story in the town square changes each day",
    "text": "Jak approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Elmer and Someone you trust acts strangely",
    "text": "Elmer approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Warn others that Elmer might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Jak and A warning bell rings",
    "text": "Jak approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Cornelia and A letter is burned",
    "text": "Cornelia approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Anna and A letter is burned",
    "text": "Anna approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Arthur and Cornelia refuses to speak",
    "text": "Arthur approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Warn others that Arthur might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Arthur and Cornelia refuses to speak",
    "text": "Arthur approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Confront Arthur publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Anna and A supply stash goes missing",
    "text": "Anna approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Flanagan and A story in the town square changes each day",
    "text": "Flanagan approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Jak and A supply stash goes missing",
    "text": "Jak approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Raul and Someone posts an anonymous message",
    "text": "Raul approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to reveal what Raul has been hiding."
  },
  {
    "title": "Flanagan and Jak sketches something violent",
    "text": "Flanagan approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to reveal what Flanagan has been hiding."
  },
  {
    "title": "Elmer and A classroom is found ransacked",
    "text": "Elmer approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Confront Elmer publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Jak and You hear someone crying below deck",
    "text": "Jak approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Elmer and A map is altered",
    "text": "Elmer approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Elmer and Raul goes silent",
    "text": "Elmer approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Confront Elmer publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Arthur and The fog reveals a strange light",
    "text": "Arthur approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Elmer and Jak sketches something violent",
    "text": "Elmer approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Confront Elmer publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Cornelia and Cornelia refuses to speak",
    "text": "Cornelia approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Flanagan and A story in the town square changes each day",
    "text": "Flanagan approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Flanagan and You hear someone crying below deck",
    "text": "Flanagan approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Arthur and Someone posts an anonymous message",
    "text": "Arthur approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Ernest and Raul goes silent",
    "text": "Ernest approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Warn others that Ernest might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Arthur and The fog reveals a strange light",
    "text": "Arthur approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Jak and Raul goes silent",
    "text": "Jak approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Arthur and A door is sealed shut",
    "text": "Arthur approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Cornelia and Someone you trust acts strangely",
    "text": "Cornelia approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Jak and Someone claims to have seen land",
    "text": "Jak approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Elmer and A supply stash goes missing",
    "text": "Elmer approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Anna and Someone claims to have seen land",
    "text": "Anna approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to reveal what Anna has been hiding."
  },
  {
    "title": "Jak and Someone you trust acts strangely",
    "text": "Jak approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and Raul goes silent",
    "text": "Cornelia approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Silence Cornelia and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Arthur and A warning bell rings",
    "text": "Arthur approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Confront Arthur publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Elmer and A letter is burned",
    "text": "Elmer approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Confront Elmer publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Ernest and A patrol returns early",
    "text": "Ernest approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to reveal what Ernest has been hiding."
  },
  {
    "title": "Flanagan and A warning bell rings",
    "text": "Flanagan approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Raul and A patrol returns early",
    "text": "Raul approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Jak and A child vanishes",
    "text": "Jak approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Raul and You hear someone crying below deck",
    "text": "Raul approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Confront Raul publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Arthur and A child vanishes",
    "text": "Arthur approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Elmer and Jak sketches something violent",
    "text": "Elmer approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Warn others that Elmer might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Jak and Someone posts an anonymous message",
    "text": "Jak approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Cornelia and A supply stash goes missing",
    "text": "Cornelia approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Cornelia and Someone claims to have seen land",
    "text": "Cornelia approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Raul and A patrol returns early",
    "text": "Raul approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Warn others that Raul might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Anna and A map is altered",
    "text": "Anna approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Raul and A story in the town square changes each day",
    "text": "Raul approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Warn others that Raul might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Jak and A letter is burned",
    "text": "Jak approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Anna and A patrol returns early",
    "text": "Anna approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Warn others that Anna might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Ernest and Cornelia refuses to speak",
    "text": "Ernest approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Confront Ernest publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Ernest and A classroom is found ransacked",
    "text": "Ernest approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Silence Ernest and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Flanagan and Ernest loses his temper",
    "text": "Flanagan approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Silence Flanagan and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Jak and A child vanishes",
    "text": "Jak approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Raul and Cornelia refuses to speak",
    "text": "Raul approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Cornelia and Someone posts an anonymous message",
    "text": "Cornelia approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Jak and Someone posts an anonymous message",
    "text": "Jak approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Jak and A classroom is found ransacked",
    "text": "Jak approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Elmer and A warning bell rings",
    "text": "Elmer approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Raul and Cornelia refuses to speak",
    "text": "Raul approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Warn others that Raul might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Cornelia and Someone you trust acts strangely",
    "text": "Cornelia approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Cornelia and A child vanishes",
    "text": "Cornelia approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Flanagan and The fog reveals a strange light",
    "text": "Flanagan approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and A patrol returns early",
    "text": "Cornelia approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Elmer and A letter is burned",
    "text": "Elmer approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Warn others that Elmer might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Jak and A door is sealed shut",
    "text": "Jak approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Warn others that Jak might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Raul and A warning bell rings",
    "text": "Raul approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Jak and A child vanishes",
    "text": "Jak approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Flanagan and You hear someone crying below deck",
    "text": "Flanagan approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Flanagan and Jak sketches something violent",
    "text": "Flanagan approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Jak and Cornelia refuses to speak",
    "text": "Jak approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Anna and You hear someone crying below deck",
    "text": "Anna approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Flanagan and The fog reveals a strange light",
    "text": "Flanagan approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Silence Flanagan and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Raul and Cornelia refuses to speak",
    "text": "Raul approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Warn others that Raul might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Arthur and A map is altered",
    "text": "Arthur approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to reveal what Arthur has been hiding."
  },
  {
    "title": "Cornelia and A warning bell rings",
    "text": "Cornelia approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Anna and A warning bell rings",
    "text": "Anna approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Arthur and A patrol returns early",
    "text": "Arthur approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Confront Arthur publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to reveal what Arthur has been hiding."
  },
  {
    "title": "Flanagan and Cornelia refuses to speak",
    "text": "Flanagan approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Jak and A letter is burned",
    "text": "Jak approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Confront Jak publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and Someone posts an anonymous message",
    "text": "Cornelia approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Anna and A supply stash goes missing",
    "text": "Anna approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Raul and A warning bell rings",
    "text": "Raul approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Silence Raul and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Cornelia and You hear someone crying below deck",
    "text": "Cornelia approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Silence Cornelia and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Elmer and Ernest loses his temper",
    "text": "Elmer approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Anna and A classroom is found ransacked",
    "text": "Anna approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Warn others that Anna might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Elmer and The fog reveals a strange light",
    "text": "Elmer approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Jak and Someone posts an anonymous message",
    "text": "Jak approaches you after someone posts an anonymous message. What do you do?",
    "options": {
      "Option A": "Silence Jak and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Cornelia and Jak sketches something violent",
    "text": "Cornelia approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Ernest and Raul goes silent",
    "text": "Ernest approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Cornelia and Ernest loses his temper",
    "text": "Cornelia approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Elmer and Cornelia refuses to speak",
    "text": "Elmer approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Anna and Cornelia refuses to speak",
    "text": "Anna approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Elmer and A classroom is found ransacked",
    "text": "Elmer approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Raul and A story in the town square changes each day",
    "text": "Raul approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Cornelia and A story in the town square changes each day",
    "text": "Cornelia approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to reveal what Cornelia has been hiding."
  },
  {
    "title": "Jak and Someone you trust acts strangely",
    "text": "Jak approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Anna and Ernest loses his temper",
    "text": "Anna approaches you after Ernest loses his temper. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Elmer and A child vanishes",
    "text": "Elmer approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Elmer and Cornelia refuses to speak",
    "text": "Elmer approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Raul and You hear someone crying below deck",
    "text": "Raul approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to reveal what Raul has been hiding."
  },
  {
    "title": "Cornelia and A letter is burned",
    "text": "Cornelia approaches you after a letter is burned. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Flanagan and A warning bell rings",
    "text": "Flanagan approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Flanagan and Someone claims to have seen land",
    "text": "Flanagan approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Warn others that Flanagan might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Anna and A door is sealed shut",
    "text": "Anna approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Arthur and A classroom is found ransacked",
    "text": "Arthur approaches you after a classroom is found ransacked. What do you do?",
    "options": {
      "Option A": "Silence Arthur and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Raul and A child vanishes",
    "text": "Raul approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Elmer and A supply stash goes missing",
    "text": "Elmer approaches you after a supply stash goes missing. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Anna and The fog reveals a strange light",
    "text": "Anna approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to change the next decision another player makes."
  },
  {
    "title": "Anna and The fog reveals a strange light",
    "text": "Anna approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Warn others that Anna might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to reveal what Anna has been hiding."
  },
  {
    "title": "Elmer and A patrol returns early",
    "text": "Elmer approaches you after a patrol returns early. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Raul and A story in the town square changes each day",
    "text": "Raul approaches you after a story in the town square changes each day. What do you do?",
    "options": {
      "Option A": "Confront Raul publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Ernest and Someone you trust acts strangely",
    "text": "Ernest approaches you after someone you trust acts strangely. What do you do?",
    "options": {
      "Option A": "Confront Ernest publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to find a relic connected to this event."
  },
  {
    "title": "Cornelia and The fog reveals a strange light",
    "text": "Cornelia approaches you after the fog reveals a strange light. What do you do?",
    "options": {
      "Option A": "Warn others that Cornelia might be dangerous.",
      "Option B": "Share your fears with a younger friend.",
      "Option C": "Ask your mentor if they\u2019ve seen this before.",
      "Option D": "Spread the word in the underground network."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Elmer and You hear someone crying below deck",
    "text": "Elmer approaches you after you hear someone crying below deck. What do you do?",
    "options": {
      "Option A": "Confront Elmer publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to receive a vision in the fog."
  },
  {
    "title": "Anna and Jak sketches something violent",
    "text": "Anna approaches you after Jak sketches something violent. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to hide this event from others."
  },
  {
    "title": "Elmer and A warning bell rings",
    "text": "Elmer approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Flanagan and A map is altered",
    "text": "Flanagan approaches you after a map is altered. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Cornelia and A warning bell rings",
    "text": "Cornelia approaches you after a warning bell rings. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Flanagan and Raul goes silent",
    "text": "Flanagan approaches you after Raul goes silent. What do you do?",
    "options": {
      "Option A": "Silence Flanagan and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to learn who else knows about this."
  },
  {
    "title": "Anna and A child vanishes",
    "text": "Anna approaches you after a child vanishes. What do you do?",
    "options": {
      "Option A": "Silence Anna and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Cornelia and Someone claims to have seen land",
    "text": "Cornelia approaches you after someone claims to have seen land. What do you do?",
    "options": {
      "Option A": "Destroy the evidence before Flanagan sees it.",
      "Option B": "Ask Anna to verify what you found.",
      "Option C": "Present it at the evening circle.",
      "Option D": "Rebuild it into something new."
    },
    "token_effect": "Spend 1 token to mark your position on the island forever."
  },
  {
    "title": "Elmer and A door is sealed shut",
    "text": "Elmer approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Silence Elmer and report what happened.",
      "Option B": "Write about it in your shared journal.",
      "Option C": "Interpret the signs as tradition demands.",
      "Option D": "Host a small gathering to discuss solutions."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Anna and A door is sealed shut",
    "text": "Anna approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Confront Anna publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  },
  {
    "title": "Cornelia and A door is sealed shut",
    "text": "Cornelia approaches you after a door is sealed shut. What do you do?",
    "options": {
      "Option A": "Confront Cornelia publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to reveal what Cornelia has been hiding."
  },
  {
    "title": "Flanagan and Cornelia refuses to speak",
    "text": "Flanagan approaches you after Cornelia refuses to speak. What do you do?",
    "options": {
      "Option A": "Confront Flanagan publicly.",
      "Option B": "Confide in someone from the town.",
      "Option C": "Seek advice from an older shipmate.",
      "Option D": "Act on impulse\u2014without permission."
    },
    "token_effect": "Spend 1 token to uncover a secret passed down through generations."
  }
];