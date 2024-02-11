// data/processSteps.ts
export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
    {
      title: '1. Idea',
      description: 'Every great project begins with a conversation. We start by getting to know you, your business, and your goals. This initial consultation allows us to understand the challenges you\'re facing and the opportunities ahead. Our team listens intently, ensuring we capture every detail to form a solid foundation for your project.'
    },
    {
      title: '2. Design',
      description: 'With your vision in mind, we move to the design phase where our creative and technical experts collaborate to craft the blueprint of your software. This stage is all about innovation and functionality, bringing together user-friendly interfaces with powerful features that serve your business needs. We keep you involved, gathering feedback to refine our designs until they perfectly align with your vision.'
    },
    {
      title: '3. Docs',
      description: 'Transparency is key to our process. Before a single line of code is written, we document every aspect of the project. This comprehensive documentation ensures that everyone involved has a clear understanding of the software\'s scope, features, and the solutions it aims to provide. It serves as a roadmap, guiding our development efforts and ensuring alignment with your objectives.'
    },
    {
      title: '4. Code',
      description: 'This is where our skilled developers bring the project to life. Using cutting-edge technologies and best coding practices, we build your software with efficiency and scalability in mind. Our personalized project management approach keeps you informed at every step, ensuring the backend operations seamlessly support your business\'s daily needs.'
    },
    {
      title: '5. Test',
      description: 'Quality assurance is not just a step in our process; it\'s woven into every stage of development. Our rigorous testing procedures ensure that every feature works as intended, with no detail overlooked. We conduct a variety of tests to identify and fix any issues, guaranteeing a high-quality product that you can rely on.'
    },
    {
      title: '6. Live',
      description: 'Before the final launch, we conduct live testing to see how the software performs in a real-world environment. This crucial phase allows us to fine-tune the application, ensuring optimal performance, security, and user experience. Your feedback is invaluable here, as it helps us make the necessary adjustments to meet your exact needs.'
    },
    {
      title: '7. Editing',
      description: 'With insights gathered from live testing, we make the final edits to polish your software. This phase is about refining the details, enhancing functionality, and ensuring that the software not only meets but exceeds your expectations.'
    },
    {
      title: '8. Launch',
      description: 'The journey doesn\'t end at launch. We stand by our software, offering ongoing support to ensure its continued success. As your business grows, we\'re here to help your software evolve, ensuring it remains a vital tool in your company\'s growth and efficiency.'
    }
  ];