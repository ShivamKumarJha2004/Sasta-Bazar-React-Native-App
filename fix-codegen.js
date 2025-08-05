/**
 * This script fixes issues with codegen paths that are too long for Windows
 */

const fs = require('fs');
const path = require('path');

// Function to shorten component names in CMakeLists.txt files
function fixCMakeListsFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace long component paths with shorter versions
  content = content.replace(/react\/renderer\/components\/[\w_]+\//g, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
}

// Find and fix all CMakeLists.txt files in node_modules
function findAndFixCMakeFiles() {
  const nodeModulesDir = path.join(__dirname, 'node_modules');
  const packages = ['react-native-gesture-handler', 'react-native-screens', 'react-native-safe-area-context'];
  
  packages.forEach(pkg => {
    const pkgDir = path.join(nodeModulesDir, pkg);
    if (fs.existsSync(pkgDir)) {
      // Look for codegen directory
      const codegenDir = path.join(pkgDir, 'android', 'build', 'generated', 'source', 'codegen', 'jni');
      if (fs.existsSync(codegenDir)) {
        const cmakeFile = path.join(codegenDir, 'CMakeLists.txt');
        if (fs.existsSync(cmakeFile)) {
          fixCMakeListsFile(cmakeFile);
        }
      }
    }
  });
}

console.log('Starting codegen path fix...');
findAndFixCMakeFiles();
console.log('Codegen path fix completed.');