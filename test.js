// Simple test script to debug the tacticSchema issue

try {
  // Try importing the module
  console.log('Attempting to import impulse-shared...');
  const sharedModule = require('./dist');
  console.log('Import successful');
  
  // Check if tacticSchema exists
  console.log('\nChecking tacticSchema:');
  console.log('tacticSchema exists:', !!sharedModule.tacticSchema);
  
  // Check the structure of the exported objects
  console.log('\nExported objects:');
  console.log('Keys available in module:', Object.keys(sharedModule));
  
  if (sharedModule.tacticSchema) {
    console.log('\nTrying to validate with tacticSchema:');
    try {
      // Try validating a simple object
      const result = sharedModule.tacticSchema.validateSync({
        type: 'action',
        title: 'Test action'
      });
      console.log('Validation successful:', result);
    } catch (validationError) {
      console.error('Validation error:', validationError);
    }
  }
  
  // Check other tactic-related exports
  console.log('\nChecking tactic-related exports:');
  console.log('tacticSchemas exists:', !!sharedModule.tacticSchemas);
  if (sharedModule.tacticSchemas) {
    console.log('tacticSchemas keys:', Object.keys(sharedModule.tacticSchemas));
  }
  
} catch (error) {
  console.error('Error importing or using module:', error);
  
  // Print the stack trace for debugging
  console.error('\nStack trace:');
  console.error(error.stack);
}
